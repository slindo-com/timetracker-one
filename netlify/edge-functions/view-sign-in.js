export default () => 
    new Response(`
    
        <h1>
            Sign In
        </h1>
        <a href="/sign-up/">
            Sign Up
        </a>
    
    `, {
        headers: { 'content-type': 'text/html' }
      })