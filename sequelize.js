var Sequelize = require('sequelize');
var sequelize = new Sequelize('sql12169727', 'sql12169727', 'eyfagbaq4q',{
  host: 'sql12.freemysqlhosting.net',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

var Members = sequelize.define('members', {
  id: Sequelize.INTEGER,
  FullName: Sequelize.STRING(60),
  Facebook: Sequelize.STRING(256),
  NickName: Sequelize.STRING(25),
  Phone: Sequelize.STRING(11),
  Email: Sequelize.STRING(50),
  Local: Sequelize.STRING(10),
  Place: Sequelize.STRING(10),
  Job: Sequelize.STRING(50),
  PlaceNumber: Sequelize.STRING(10),
  Vehicle: Sequelize.STRING(20),
  Model: Sequelize.STRING(4),
});

sequelize.sync().then(function() {
  return Members.create({
    FullName: 'Anh, Nguyen Ngoc Tuan',
	Facebook: '',
	NickName: 'Dau Den',
	Phone: '0944534128',
	Email: 'anh.nguyen@codingland.com',
	Local: 'District 9',
	Place: 'District 3',
	Job: 'Software Enginnering',
	PlaceNumber: '51F-236.52',
	Vehicle: 'Cruze',
	Model: '2015',
  });
}).then(function(data) {
  console.log(data);
});

console.log(123);