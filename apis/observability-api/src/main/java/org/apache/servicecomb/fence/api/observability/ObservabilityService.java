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
package org.apache.servicecomb.fence.api.observability;

import jakarta.servlet.http.Part;
import jakarta.validation.constraints.NotNull;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.QueryParam;

/**
 * Observability Apis for service management.
 */
@Path("/v1/scb/observability")
public interface ObservabilityService {
  String NAME = "scb-observability";

  @Path("/searchTrace")
  @GET
  SearchTraceResponse searchTrace(@NotNull @QueryParam("timestamp") String timestamp,
      @NotNull @QueryParam("traceId") String traceId);

  @Path("/searchLog")
  @GET
  SearchLogResponse searchLog(@NotNull @QueryParam("timestamp") String timestamp,
      @NotNull @QueryParam("traceId") String traceId);

  @Path("/downloadLog")
  @GET
  Part downloadLog(@NotNull @QueryParam("timestamp") String timestamp);

  @Path("/downloadMetrics")
  @GET
  Part downloadMetrics(@NotNull @QueryParam("timestamp") String timestamp);
}
