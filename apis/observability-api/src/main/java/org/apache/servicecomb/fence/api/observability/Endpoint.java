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

public class Endpoint {
  private String serviceName;

  private String ipv4;

  public String getServiceName() {
    return serviceName;
  }

  public Endpoint setServiceName(String serviceName) {
    this.serviceName = serviceName;
    return this;
  }

  public String getIpv4() {
    return ipv4;
  }

  public Endpoint setIpv4(String ipv4) {
    this.ipv4 = ipv4;
    return this;
  }
}
