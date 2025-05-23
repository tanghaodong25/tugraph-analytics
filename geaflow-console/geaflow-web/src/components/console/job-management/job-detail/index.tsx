/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { useState, useEffect, ReactNode } from "react";
import { Row, Breadcrumb, Spin, Tabs, Card } from "antd";
import { useMemoizedFn } from "ahooks";
import BasicInfo from "./components/basicInfo";
import { JobRunTimeDetail } from "./components/JobRunTimeDetail";
import { JobMessage } from "./components/JobMessage";
import { JobMetric } from "./components/JobMetric";
import { JobOffSet } from "./components/JobOffSet";
import { getJobsTasks, getApiTasks } from "../../services/job-detail";
import { JobContainer } from "./components/container";
import { useSearchParams } from "umi";
import styles from "./index.module.less";
import { history } from "umi";
import $i18n from "@/components/i18n";

interface props {
  redirectPath?: RedirectPath[];
}

interface RedirectPath {
  path: string;
  pathName: string;
}

export const JobDetail: React.FC<props> = ({ redirectPath }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const uniqueId = searchParams.get("uniqueId");

  const [state, setState] = useState<{
    tabItems: {
      label: string;
      key: string;
      children: string | ReactNode;
    }[];
    record: any;
  }>({
    tabItems: [],
    record: null,
  });
  const [tabKey, setTabKey] = useState<string>("job-detail");
  const { tabItems, record } = state;
  const handleDeleteDraftJob = useMemoizedFn(async () => {});
  const [text, setText] = useState<string>("");

  const hendletasks = (record: any) => {
    if (record) {
      getApiTasks(record?.id).then((res) => {
        setText(res);
      });
    }
  };

  useEffect(() => {
    hendletasks(record);
  }, [record]);
  // Tabs
  const jobTabItems = (value: string, jobItem?: any) => [
    {
      label: $i18n.get({
        id: "openpiece-geaflow.job-management.job-detail.TaskDetails",
        dm: "作业详情",
      }),
      key: "job-detail",
      children: tabKey === "job-detail" && (
        <BasicInfo
          currentStage={value}
          jobItem={jobItem}
          onDelete={handleDeleteDraftJob}
          uniqueId={uniqueId}
          redirectPath={redirectPath}
        />
      ),
    }, // 务必填写 key
    {
      label: $i18n.get({
        id: "openpiece-geaflow.job-management.job-detail.RunDetails",
        dm: "运行详情",
      }),
      key: "item-2",
      children: tabKey === "item-2" && <JobRunTimeDetail jobItem={jobItem} />,
    },
    {
      label: "Metrics",
      key: "metric",
      children: tabKey === "metric" && <JobMetric jobItem={jobItem} />,
    },
    {
      label: $i18n.get({
        id: "openpiece-geaflow.job-management.job-detail.ExceptionInformation",
        dm: "异常信息",
      }),
      key: "exception-info",
      children: tabKey === "exception-info" && <JobMessage jobItem={jobItem} />,
    },
    {
      label: "Containers",
      key: "JobContainer",
      children: tabKey === "JobContainer" && <JobContainer jobItem={jobItem} />,
    },
    {
      label: "Offsets",
      key: "offset",
      children: tabKey === "offset" && <JobOffSet jobItem={jobItem} />,
    },
    {
      label: $i18n.get({
        id: "openpiece-geaflow.job-management.job-detail.RuntimeLogs",
        dm: "运行时日志",
      }),
      key: "runtime-log",
      children: <Card>{text}</Card>,
    },
  ];

  useEffect(() => {
    if (uniqueId) {
      getJobsTasks(uniqueId).then((res) => {
        if (res) {
          setState({
            ...state,
            record: res,
            tabItems: jobTabItems(uniqueId, res),
          });
          hendletasks(res);
        }
      });
    }
  }, [uniqueId]);

  useEffect(() => {
    if (uniqueId) {
      setState({
        ...state,
        tabItems: jobTabItems(uniqueId, record),
      });
    }
  }, [tabKey]);

  if (!record) {
    return <Spin />;
  }
  return (
    <div className={styles["job-detail-container"]}>
      <Row>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a
              onClick={() => {
                history.push("/console/ColJobList");
              }}
            >
              {$i18n.get({
                id: "openpiece-geaflow.job-management.job-detail.TaskManagement",
                dm: "作业管理",
              })}
            </a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{record.id}</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row style={{ marginTop: 16 }}>
        {/* <Tabs defaultActiveKey="1" items={tabItems} style={{ width: '100%' }} /> */}
        <Tabs
          defaultActiveKey="1"
          style={{ width: "100%" }}
          onChange={(key: string) => {
            setTabKey(key);
          }}
        >
          {tabItems.map((item) => {
            return (
              <Tabs.TabPane tab={item.label} key={item.key}>
                {item.children}
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      </Row>
    </div>
  );
};
