const accessToken = 'YOUR_GITHUB_ACCESS_TOKEN';

const query = `
 query FindFirstIssue {
   repository(owner:"loadimpact", name:"k6") {
     issues(first:1) {
       edges {
         node {
           id
           number
           title
         }
       }
     }
   }
 }`;

const headers = {
  'Authorization': `Bearer ${accessToken}`,
  'Content-Type': 'application/json',
};

const res = http.post('https://api.github.com/graphql', JSON.stringify({ query: query }), {
  headers: headers,
});
