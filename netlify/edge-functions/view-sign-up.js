export default () => 
    new Response(`
    
        <h1>
            Sign Up
        </h1>
        <a href="/sign-in/">
            Sign In
        </a>
    
    `, {
        headers: { 'content-type': 'text/html' }
      })