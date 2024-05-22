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

import java.util.List;

public class SearchTraceResponse {
  private List<Trace> data;

  private String application;

  private String serviceName;

  private String localhost;

  public String getLocalhost() {
    return localhost;
  }

  public SearchTraceResponse setLocalhost(String localhost) {
    this.localhost = localhost;
    return this;
  }

  private String instanceId;

  public List<Trace> getData() {
    return data;
  }

  public SearchTraceResponse setData(List<Trace> data) {
    this.data = data;
    return this;
  }

  public String getApplication() {
    return application;
  }

  public SearchTraceResponse setApplication(String application) {
    this.application = application;
    return this;
  }

  public String getServiceName() {
    return serviceName;
  }

  public SearchTraceResponse setServiceName(String serviceName) {
    this.serviceName = serviceName;
    return this;
  }

  public String getInstanceId() {
    return instanceId;
  }

  public SearchTraceResponse setInstanceId(String instanceId) {
    this.instanceId = instanceId;
    return this;
  }
}
