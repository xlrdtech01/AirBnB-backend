'use strict';

const { SpotImage } = require('../models');
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await SpotImage.bulkCreate([
      {
        spotId: 1,
        url: 'https://cdn.pixabay.com/photo/2024/04/14/03/15/ai-generated-8694734_1280.jpg',
        preview: true,

      },
      {
        spotId: 1,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1296639129060376626/W9G9MUtJSl2Rdq7pvtkjCw.png?ex=67199c4a&is=67184aca&hm=c733b6d371852ca03760c7832920ca804c759129ad894584dc61a28764f6e54c&',
        preview: false,

      },
      {
        spotId: 1,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1296639129286737951/R8XwYhp5QjSYHewPizseEQ.png?ex=67199c4a&is=67184aca&hm=e71c0526c5fafdcd80f120f135c62857e3d080c80d9320b0c5619e241ba2d47b&',
        preview: false,

      },
      {
        spotId: 1,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1296639129500520478/v8G82nzqQuOoVoDs4Gc4Xg.png?ex=67199c4a&is=67184aca&hm=faf0b2d9d94779893a5e9e0320708f3ed48d8274690b42130115467423e05138&',
        preview: false,

      },      
      {
        spotId: 1,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1296639129752440974/csYLmwEcSvyvpd13LuT0CQ.png?ex=67199c4a&is=67184aca&hm=0f5f8ddf5fd809a9c72d76be8ff10efff4727778e888db858454864b7dacaa58&',
        preview: false,

      },
      {
        spotId: 2,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1296971483146616912/75yP6BfDS_WozeIKqud8PA.png?ex=67198052&is=67182ed2&hm=81287b3bec6ce5e171bc9e2615ec947be023fb3ebc8a81fe07a29a0ca0a024ee&',
        preview: true,

      },
      {
        spotId: 2,
        url: 'https://cdn.pixabay.com/photo/2024/05/24/15/52/wine-8785341_1280.jpg',
        preview: false,

      },
      {
        spotId: 2,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1296971483477839933/jhZWEJ2fT7ajKkdeqw5S6g.png?ex=67198052&is=67182ed2&hm=cf1d63424a151c5a55fb9da3e1ff2aa5a135bbbfceed8efa2def1b13ea763cd3&',
        preview: false,

      },
      {
        spotId: 2,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1296971484102791209/qvZyNCB6TSqIrDGLHXWXJA.png?ex=67198052&is=67182ed2&hm=98bfbc9c2481950ddb5beb6a5d4b31f0a16adaf8eaee8a2040617a029d805730&',
        preview: false,

      },
      {
        spotId: 2,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1296971484459438132/FzaiG3ThmcENDBCK1y6A.png?ex=67198052&is=67182ed2&hm=42a09d051a7ab39193453cb4e2c7c46fda464486cd7b09bd6a4ee3fa46431578&',
        preview: false,

      },
      {
        spotId: 3,
        url: 'https://cdn.pixabay.com/photo/2024/05/10/10/13/ai-generated-8752761_1280.jpg',
        preview: true,
      },
      {
        spotId: 3,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1296976202459775026/zbeL7fjmToqyX_huBzmwLA.png?ex=671984b7&is=67183337&hm=39a707cbf1bd1efed99d878efa0157dbaa77a559196f44e523e797ef1d2afb2d&',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1296976203042914364/KEEuSI_GTzORrmuNTZY6Mg.png?ex=671984b7&is=67183337&hm=690a73d0a9b26a20aa99a71034cffc4fb7caa62d70a694a7964bdf6b683866e8&',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1296976203294576721/O8bZI135QSSRYXzf7mBeeA.png?ex=671984b7&is=67183337&hm=988bb459181c03c15d8d60e3f8004413d76396dbccff1f4fe4e86c6db85b7b1c&',
        preview: false,
      },
      {
        spotId: 3,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1296976203714134127/QoliIaTyQcyN4Ky5LH_7Zw.png?ex=671984b7&is=67183337&hm=315af4d8e952168f6738ace9147e4ce0543fb882c2701455c4c7be6f49b5c4b9&',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://cdn.pixabay.com/photo/2024/07/30/12/29/ai-generated-8932163_1280.jpg',
        preview: true,
      },
      {
        spotId: 4,
        url: 'https://cdn.pixabay.com/photo/2024/05/11/09/50/inside-8754428_1280.png',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://cdn.pixabay.com/photo/2024/09/29/09/34/ai-generated-9083153_1280.jpg',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://cdn.pixabay.com/photo/2023/03/15/20/46/kitchen-7855426_1280.jpg',
        preview: false,
      },
      {
        spotId: 4,
        url: 'https://cdn.pixabay.com/photo/2023/12/19/22/46/interior-8458570_1280.jpg',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1298022997474414692/vdaGyIk6RHa1fxqMM475pQ.png?ex=671a07de&is=6718b65e&hm=a6b767b9bd526fa8e8b30e022eb55008e377b4dfb27e1b1dba904ed5984c06a5&',
        preview: true,
      },
      {
        spotId: 5,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1298022998170665010/AF15NX7zS8eSwSgimrqTEg.png?ex=67195f1e&is=67180d9e&hm=d3af89ac1f42248e721238bc9556db13d62cfec9a93e4ec90b4e4217ce12c58b&',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1298022997826867291/zHFUZ7CSRtWS2U55UDtakw.png?ex=67195f1e&is=67180d9e&hm=944853f848952d7bd8575b7f36fdb2808f2024d2ad5fc82a5f21d6ec51cd7629&',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1298022998460203009/UHjbEWVhTX-0IQLDSqS31g.png?ex=67195f1e&is=67180d9e&hm=5a756f8cc2b38ee9b8fa53b52c4b047fb8848055d6acb47341eca0e3c21da01a&',
        preview: false,
      },
      {
        spotId: 5,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1298022998674243615/fLO-lDE4Q_y2IR35lLX47w.png?ex=67195f1e&is=67180d9e&hm=fa198fae1a496677c5ace110a29f51dafcc21897a366a66d89dd9a8c9a565709&',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1298025546759933962/xSEUHxWSCeTZ5Qx5fjmvg.png?ex=6719617e&is=67180ffe&hm=e915f0e99fa2b786e30033e1d507d0c55ebbe441cc14ecbe68e2648aa327ffaf&',
        preview: true,
      },
      {
        spotId: 6,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1298025547007529090/2YT6B2oARl-n9oxEtvL3KQ.png?ex=6719617e&is=67180ffe&hm=261aadf5ab34e9dd57358b4dfaddf6fbb6bca0a355832fedbea3dd4ef7f61b19&',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1298025547548594226/CxrT8jU5QJiBMFf80olt6Q.png?ex=6719617e&is=67180ffe&hm=b5f0add1b41fc451e8763126763dec21f78a2abcac46501956c6f17742f78d34&',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1298025547300868136/P_2CLqmaRNyMpVtrPAqJOQ.png?ex=6719617e&is=67180ffe&hm=d1c126df1bd2b86721e3a8473e8c91edab1e07e3ec8257209d7b433dbb070091&',
        preview: false,
      },
      {
        spotId: 6,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1298025547988865147/sVQ8LDvITUipHYtbfUzF_A.png?ex=6719617e&is=67180ffe&hm=0384f501c6cca7e1a5c0baf855a2eae9bc2cc2b212d333473172be89d61aaea6&',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1298030136653778996/Pwxb20ERPWnoGzS0E46Ig.png?ex=671965c4&is=67181444&hm=5897666f10874b54c015a82cc3efd47662c5ecdb319f0ecadaf7e7cf2ccb83b1&',
        preview: true,
      },
      {
        spotId: 7,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1298030136884596756/Ku15ntMoSHyam18UIIQkjQ.png?ex=671965c4&is=67181444&hm=8b7beb1ef6c7922b8c3c7012ee23513d841b14283f6867b0bbf21c84ee3d6a10&',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1298030137098502319/jBXY8P2pSE2EAclOLvPRFw.png?ex=671965c4&is=67181444&hm=780aa4f854a473e66bb06b9e80f07105a1f8d336852a69d685dc5a22afb8028b&',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1298030137329324032/3XyfXd5LSuGF48xZlw6Iqg.png?ex=671965c4&is=67181444&hm=59f37593505285ae06ff762306bf027ff44376df668f19cb2fd4ebbefeda2c5b&',
        preview: false,
      },
      {
        spotId: 7,
        url: 'https://cdn.discordapp.com/attachments/1295903741521694771/1298030137673125960/RuLyQuQJSkOaIV4hx9UXsw.png?ex=671965c5&is=67181445&hm=a7c4ecb2a62536acf50394010aa87b6d6b2ce67b375cdf4dcae7c095d10efe91&',
        preview: false,
      },
    ], { validate: true })
  },

  async down (queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7] }
    }, {});
  }
};
