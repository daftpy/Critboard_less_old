import Head from 'next/head';

interface IProps {
  title?: string;
  description?: string;
}

const BaseHead: React.FC<IProps> = ({title, description}) => {
  return (
    <Head>

      {title ? (
        <title>
          {title}
        </title>
      ) : (
        <title>
          Daftpy
        </title>
      )}
      {description ? (
        <meta name="description" content={description} />
      ) : (
        <meta name="description" content="Python and Javascript musings" />
      )}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )   
}

export default BaseHead;