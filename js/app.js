
function addInfo () {
  document.getElementById("about").innerHTML = "";
  document.getElementById("about").innerHTML = "<div id=\"titles\"><div id=\"titlecontent\"><p>В далеком-далеком 2020 году. В далеком-далеком г. Санкт-Петербург.</p>" +
      "<p>Родилась идея стать причастной к сфере IT-Технологий, а именно - стать Тестировщиком ПО </p>"+
      "<p>Ну , а теперь - Я — QA engineer,тестировщик с опытом работы более 2х лет в области функционального и нефункционального тестирования программного обеспечения</p>"+
      "<p>включая тестирование десктопных приложений и веб-сайтов, тестирования UI/UX, API</p>"+
      "<p>Мне 28 лет , осваиваю сноу-борд, учусь игре на гитаре и хорошо пою в караоке</p>"+
      "<p>Если вашей команде нужен классный тестировщик, то вы его нашли</p></div></div>"
}
function addTech() {
  document.getElementById("about").innerHTML = "";
  document.getElementById("about").innerHTML = "<table class='table'>\n" +
      "\t<tbody>\n" +
      "\t\t<tr>\n" +
      "\t\t\t<td><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-monitor fea icon-md\"><rect x=\"2\" y=\"3\" width=\"20\" height=\"14\" rx=\"2\" ry=\"2\"></rect><line x1=\"8\" y1=\"21\" x2=\"16\" y2=\"21\"></line><line x1=\"12\" y1=\"17\" x2=\"12\" y2=\"21\"></line></svg>" +
      "\n<strong class='title' style='font-size: 40px; letter-spacing: -2px; text-shadow: none;line-height: normal;'>Developer Tools</strong><br><strong class='explanations'>Для тестирования front-части web-приложений</strong></td>\n" +
      "\t\t\t<td><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-feather fea icon-md\"><path d=\"M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z\"></path><line x1=\"16\" y1=\"8\" x2=\"2\" y2=\"22\"></line><line x1=\"17.5\" y1=\"15\" x2=\"9\" y2=\"15\"></line></svg>" +
      "\n<strong class='title' style='font-size: 40px; letter-spacing: -2px; text-shadow: none;line-height: normal;'>Postman</strong><br><strong class='explanations'>Для тестирования API и написания автотестов</strong></td>\n" +
      "\t\t\t<td><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-disc fea icon-md\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></svg>" +
      "\n<strong class='title' style='font-size: 40px; letter-spacing: -2px; text-shadow: none;line-height: normal;'>Swagger</strong><br><strong class='explanations'>Для тестирования API и документации по API</strong></td>\n" +
      "\t\t</tr>\n" +
      "\t\t<tr>\n" +
      "\t\t\t<td><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-layout fea icon-md\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"3\" y1=\"9\" x2=\"21\" y2=\"9\"></line><line x1=\"9\" y1=\"21\" x2=\"9\" y2=\"9\"></line></svg>" +
      "\n<strong class='title' style='font-size: 40px; letter-spacing: -2px; text-shadow: none;line-height: normal;'>PostgreSQL</strong><br><strong class='explanations'>Просмотр данных в БД и написание SQL-запросов</strong></td>\n" +
      "\t\t\t<td><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-watch fea icon-md\"><circle cx=\"12\" cy=\"12\" r=\"7\"></circle><polyline points=\"12 9 12 12 13.5 13.5\"></polyline><path d=\"M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83\"></path></svg>" +
      "\n<strong class='title' style='font-size: 40px; letter-spacing: -2px; text-shadow: none;line-height: normal;'>REST-API, SOAP</strong><br><strong class='explanations'>Использование в процессе тестирования обмена данными</strong></td>\n" +
      "\t\t\t<td><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-target fea icon-md\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle></svg>" +
      "\n<strong class='title' style='font-size: 40px; letter-spacing: -2px; text-shadow: none;line-height: normal;'>Jira</strong><br><strong class='explanations'>Организация ежедневной работы и написание багрепортов</strong></td>\n" +
      "\t\t</tr>\n" +
      "\t\t<tr>\n" +
      "\t\t\t<td><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-target fea icon-md\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle></svg>" +
      "\n<strong class='title' style='font-size: 40px; letter-spacing: -2px; text-shadow: none;line-height: normal;'>Test IT</strong><br><strong class='explanations'>Написание тест-кейсов</strong></td>\n" +
      "\t\t\t<td><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-target fea icon-md\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle></svg>" +
      "\n<strong class='title' style='font-size: 40px; letter-spacing: -2px; text-shadow: none;line-height: normal;'>Charles</strong><br><strong class='explanations'>Тестирование front-end / back-end</strong></td>\n" +
      "\t\t\t<td><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-target fea icon-md\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle></svg>" +
      "\n<strong class='title' style='font-size: 40px; letter-spacing: -2px; text-shadow: none;line-height: normal;'>Kibana</strong><br><strong class='explanations'>Просмотр логов приложений</strong></td>\n" +
      "\t\t</tr>\n" +
      "\t\t<tr>\n" +
      "\t\t\t<td><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-target fea icon-md\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle></svg>" +
      "\n<strong class='title' style='font-size: 40px; letter-spacing: -2px; text-shadow: none;line-height: normal;'>HTML, CSS</strong><br><strong class='explanations'>Тестирование front-end</strong></td>\n" +
      "\t\t\t<td><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-target fea icon-md\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle></svg>" +
      "\n<strong class='title' style='font-size: 40px; letter-spacing: -2px; text-shadow: none;line-height: normal;'>Figma</strong><br><strong class='explanations'>Тестирование user-interface front-end</strong></td>\n" +
      "\t\t\t<td><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-target fea icon-md\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><circle cx=\"12\" cy=\"12\" r=\"6\"></circle><circle cx=\"12\" cy=\"12\" r=\"2\"></circle></svg>" +
      "\n<strong class='title' style='font-size: 40px; letter-spacing: -2px; text-shadow: none;line-height: normal;'>Pixel perfect</strong><br><strong class='explanations'>Тестирование user-interface front-end</strong></td>\n" +
      "\t\t</tr>\n" +
      "\t</tbody>\n" +
      "</table>";
}
window.addEventListener('load', () => {
  addInfo();
});


