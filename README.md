VersaWeb template

# Update proxy

/src/setupProxy.js

update the url to your api

`app.use(proxy('/api', { target: 'http://localhost:4000/' }));`

# Scaffold a new resource

In the command line do `npm run generate`
select the approriate generator

