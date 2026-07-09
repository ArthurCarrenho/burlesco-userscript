export default function() {
  return `
    var email = 'colaborador@dgabc.com.br';
    var senha = '';
    localStorage.emailNoticiaExclusiva = email;
    $('.NoticiaExclusivaNaoLogado').hide();
    $('.NoticiaExclusivaLogadoSemPermissao').hide();
    $('.linhaSuperBanner').show();
    $('.footer').show();
    $('.NoticiaExclusivaLogado').show();
  `;
}
