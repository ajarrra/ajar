import HeaderNav from '../HeaderNav/HeaderNav'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='container'>
        <HeaderNav/>
      </div>
    </header>
  )
}

export default Header