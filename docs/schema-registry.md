![Avro Schema](https://upload.wikimedia.org/wikipedia/commons/9/9c/Apache_Avro_Logo.svg)

In this phase, we're going to define the a `transaction` schema for message validation before publishing. You can accomplish it either through **Control Center** or **REST API**. We'll use the following schema:
```
{
  "name": "transactions",
  "type": "record",
  "fields": [
    {
      "name": "timestamp",
      "type": "long"
    },
    {
      "name": "transaction_id",
      "type": "string"
    },
    {
      "name": "merchant_id",
      "type": "string"
    },
    {
      "name": "amount",
      "type": "float"
    }
  ]
}
```

## REST API
```
curl -X POST -H "Content-type: application/json" localhost:8081/subjects/transactions-value/versions --data '{"schema": "{ \"name\": \"transactions\", \"type\": \"record\", \"fields\": [{ \"name\": \"timestamp\", \"type\": \"long\" }, { \"name\": \"transaction_id\", \"type\": \"string\" }, { \"name\": \"merchant_id\", \"type\": \"string\" }, { \"name\": \"amount\", \"type\": \"float\" }]}"}'
```

## Control Center
[![Schema Registry](https://j.gifs.com/Mwz2Gm.gif)](https://youtu.be/gQpgWJxpwxc "Schema Registry")

## Useful Endpoints
* Get the schema string identified by the input ID:
```
GET /schemas/ids/1 HTTP/1.1
```

* Get a list of registered subjects:
```
GET /subjects HTTP/1.1
```

* Get a specific version of the schema registered under this subject:
```
GET /subjects/test/versions/1 HTTP/1.1
```

* Register a new schema under the specified subject:
```
POST /subjects/test/versions HTTP/1.1
Host: schemaregistry.example.com
Accept: application/vnd.schemaregistry.v1+json, application/vnd.schemaregistry+json, application/json

{
  "schema":
    "{
       \"type\": \"record\",
       \"name\": \"test\",
       \"fields\":
         [
           {
             \"type\": \"string\",
             \"name\": \"field1\"
           },
           {
             \"type\": \"int\",
             \"name\": \"com.acme.Referenced\"
           }
          ]
     }",
  "schemaType": "AVRO",
  "references": [
    {
       "name": "com.acme.Referenced",
       "subject":  "childSubject",
       "version": 1
    }
  ]
}
```