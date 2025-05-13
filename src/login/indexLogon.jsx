import styles from "./stylesLogin.module.css";

export default function Login() {
  return (
    <>
      <div className={styles.login}>
        <h1>Login</h1>
        <form action="#">
          <div className={styles.caixaUsuario}>
            <input type="text" placeholder="Nome de usuario" required />
          </div>
          <div className={styles.caixaSenha}>
            <input type="password" placeholder="Senha" required />
          </div>
          <div className={styles.caixaDown}>
            <label type="text">
              <input type="checkbox" />
              Lembrar
            </label>
            <a href="#">Esqueci minha senha</a>
          </div>
          <button type="submit">Entrar</button>
          <div className={styles.aqui}>
            <p>
              Não tenho conta?<a href="#">Cadatre AQUI!</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
