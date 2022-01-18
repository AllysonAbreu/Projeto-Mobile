'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Postagens', [
      {
       titulo: 'Saudações turma!',
       usuario_id: 6,       
       conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
       createdAt: new Date(),
       updatedAt: new Date()       
      },
      {
        titulo: 'Dúvida sobre a atividade de geografia.',
        usuario_id: 1,        
        conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo. Turpis tincidunt id aliquet risus feugiat in ante metus. Non pulvinar neque laoreet suspendisse interdum. Amet massa vitae tortor condimentum lacinia. Id neque aliquam vestibulum morbi blandit cursus risus. Quis risus sed vulputate odio ut enim blandit volutpat. Volutpat odio facilisis mauris sit amet. Eget arcu dictum varius duis at consectetur lorem donec. Non quam lacus suspendisse faucibus. Eget felis eget nunc lobortis mattis aliquam faucibus. Duis at consectetur lorem donec massa sapien faucibus. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Rhoncus urna neque viverra justo nec. Odio facilisis mauris sit amet massa vitae tortor condimentum. Ornare aenean euismod elementum nisi quis. Sit amet massa vitae tortor condimentum lacinia quis. Egestas sed tempus urna et pharetra.',
        createdAt: new Date(),
        updatedAt: new Date()       
       },
       {
        titulo: 'Alguém está sem grupo?',
        usuario_id: 4,       
        conteudo: 'Habitasse platea dictumst quisque sagittis purus sit. Eu volutpat odio facilisis mauris sit amet massa. Urna nunc id cursus metus aliquam eleifend mi. Amet commodo nulla facilisi nullam vehicula ipsum a arcu. Faucibus ornare suspendisse sed nisi lacus sed. Velit euismod in pellentesque massa placerat. Pulvinar neque laoreet suspendisse interdum consectetur. Sed blandit libero volutpat sed cras ornare arcu dui. Urna nec tincidunt praesent semper feugiat. Ut pharetra sit amet aliquam id diam. Iaculis nunc sed augue lacus. Sagittis nisl rhoncus mattis rhoncus urna. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Quis imperdiet massa tincidunt nunc pulvinar.',
        createdAt: new Date(),
        updatedAt: new Date()       
       },
       {
        titulo: 'Preciso que alguém compartilhe fotos do conteúdo de hoje!',
        usuario_id: 1,        
        conteudo: 'Quam nulla porttitor massa id neque aliquam vestibulum morbi. Nisl vel pretium lectus quam id leo in vitae. Risus nec feugiat in fermentum. Quis commodo odio aenean sed adipiscing diam donec. Laoreet id donec ultrices tincidunt arcu non sodales. Netus et malesuada fames ac turpis egestas. Viverra adipiscing at in tellus integer. Gravida arcu ac tortor dignissim convallis aenean et. Justo eget magna fermentum iaculis eu non diam. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Eleifend quam adipiscing vitae proin sagittis nisl. Nisi est sit amet facilisis magna etiam. Congue nisi vitae suscipit tellus mauris a diam maecenas sed. Congue quisque egestas diam in arcu cursus euismod quis viverra. Feugiat in fermentum posuere urna nec. Leo urna molestie at elementum eu facilisis.',
        createdAt: new Date(),
        updatedAt: new Date()       
       },
       {
        titulo: 'Olá galera!',
        usuario_id: 3,        
        conteudo: 'Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Quis hendrerit dolor magna eget. Elit eget gravida cum sociis natoque penatibus et magnis. Augue interdum velit euismod in pellentesque massa placerat. Vitae suscipit tellus mauris a diam maecenas sed enim. Quis vel eros donec ac odio tempor orci. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Suspendisse faucibus interdum posuere lorem ipsum dolor. Risus feugiat in ante metus dictum. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Potenti nullam ac tortor vitae purus. Facilisi cras fermentum odio eu.',
        createdAt: new Date(),
        updatedAt: new Date()       
       },
    ], {});   
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Postagens', null, {}); 
  }
};
