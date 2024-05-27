/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.servicecomb.fence.authentication;

import java.util.List;
import java.util.Map;
import java.util.concurrent.CompletableFuture;

import org.apache.servicecomb.fence.api.authentication.TokenService;
import org.apache.servicecomb.fence.token.OpenIDToken;
import org.apache.servicecomb.fence.token.OpenIDTokenStore;
import org.apache.servicecomb.fence.util.CommonConstants;
import org.apache.servicecomb.provider.rest.common.RestSchema;
import org.apache.servicecomb.swagger.invocation.exception.CommonExceptionData;
import org.apache.servicecomb.swagger.invocation.exception.InvocationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import jakarta.ws.rs.core.Response.Status;

@RestSchema(schemaId = "TokenEndpoint", schemaInterface = TokenService.class)
public class TokenEndpoint implements TokenService {
  @Autowired
  private List<TokenGranter> granters;

  @Autowired
  @Qualifier(CommonConstants.BEAN_AUTH_OPEN_ID_TOKEN_STORE)
  private OpenIDTokenStore store;

  @Override
  public OpenIDToken grantToken(Map<String, String> parameters) {
    String grantType = parameters.get(AuthenticationServerConstants.PARAM_GRANT_TYPE);

    for (TokenGranter granter : granters) {
      if (granter.enabled()) {
        OpenIDToken token = granter.grant(grantType, parameters);
        if (token != null) {
          return token;
        }
      }
    }

    return null;
  }

  @Override
  public OpenIDToken queryToken(String accessToken) {
    CompletableFuture<OpenIDToken> result = store.readTokenByAccessToken(accessToken);
    try {
      return result.get();
    } catch (Exception e) {
      throw new InvocationException(Status.INTERNAL_SERVER_ERROR,
          new CommonExceptionData("internal unexpected error."));
    }
  }
}
