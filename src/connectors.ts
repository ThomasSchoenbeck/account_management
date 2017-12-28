import * as cassandra from 'cassandra-driver';

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], protocolOptions: { port: 32774 }, keyspace: 'account_management' });

client.connect(function(err) {
  if (err) console.error.bind(console, 'Cassandra connection error:');
  else {
  console.log('Cassandra connection establied');
  }
});

client.on('log', function(level, className, message, furtherInfo) {
  // filter verbose logging
  if (level !== 'verbose') {
    console.log('log event: %s -- %s', level, message);
  }
});

export { client };

console.log('Connectors iniitialized');