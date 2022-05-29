import { Html, Head, Main, NextScript } from 'next/document'

class  MyDocument extends Document() {
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render(){ 
  return (
    <Html>
      <Head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.1.1/css/fontawesome.min.css" integrity="sha384-zIaWifL2YFF1qaDiAo0JFgsmasocJ/rqu7LKYH8CoBEXqGbb9eO+Xi3s6fQhgFWM" crossorigin="anonymous"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
}

export default MyDocument