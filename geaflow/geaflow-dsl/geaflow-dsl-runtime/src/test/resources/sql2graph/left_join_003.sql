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

CREATE TABLE IF NOT EXISTS left_join_003_result (
	f0 bigint,
	f1 bigint,
  f2 bigint,
  f3 bigint
) WITH (
	type='file',
	geaflow.dsl.file.path='${target}'
);

USE GRAPH g_student;

INSERT INTO left_join_003_result
SELECT table_left.sid, table_right.sid, courseCount, cid from
(
SELECT student.id as sid, count(distinct selectCourse.targetId) as courseCount from
student LEFT JOIN selectCourse
on student.id = selectCourse.srcId
group by student.id
) table_left
LEFT JOIN
(
SELECT student.id as sid, selectCourse.targetId as cid from
student, selectCourse
where student.id = selectCourse.srcId
) table_right
on table_left.sid = table_right.sid
;