import AppHead from 'components/molecules/AppHead'
import Top from 'components/organisms/home/Top'
import styles from 'pages/index.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <AppHead title='アプリ' />
      <Top />
    </div>
  )
}

export default Home
