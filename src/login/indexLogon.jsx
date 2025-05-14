import styles from "./stylesLogin.module.css";

export default function Login() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.herader}>
          <h1>Login</h1>
        </div>
        <form className={styles.loginForm}>
          <div className={styles.group}>
            <input type="text" placeholder="Nome de usuario" required />
          </div>
          <div className={styles.group}>
            <input type="password" placeholder="Senha" required />
          </div>
          <div className={styles.remem}>
            <input type="checkbox" id="recordarme" />
            <label htmlFor="remember">Recordarme</label>
          </div>
          <button type="submit" className={styles.submiButton}>
            Entrar
          </button>
          <div className={styles.links}>
            <a href="">Não tem conta?</a>
            <a href="">Cadastre AQUI!</a>
          </div>
        </form>
      </div>
    </>
  );
}
