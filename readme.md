# account management

using nodejs, express, graphql (graphql-code-generator) and cassandra


**problem:** cassandra does not have a good integration into express or graphql which means queries and the handling of the result sets need to be define in great detail.


cassandra config needs to be updated to enable password authentication and allow filtering for queries, otherwise indices need to be used

cassandra db needs to be initialized:
- create user
- create keyspace
- create tables
- insert data
- create indices



start api server using (npm start | yarn start)





create index that allows using LIKE operation without using % as wildcard
source: http://www.tsoft.se/wp/2016/08/12/sql-like-operation-in-cassandra-is-possible-in-v3-4/
```javascript
CREATE CUSTOM INDEX name_cidx ON account_management.teams (name) USING 'org.apache.cassandra.index.sasi.SASIIndex' WITH OPTIONS = {'mode': 'CONTAINS', 'analyzer_class': 'org.apache.cassandra.index.sasi.analyzer.StandardAnalyzer', 'case_sensitive': 'false'};
```