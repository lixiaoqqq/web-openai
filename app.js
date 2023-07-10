const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
const db = require("./index");
const cors = require('cors');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



// // 静态资源
// app.use(express.static(path.join(__dirname, 'dist')));

// // 所有路由请求都返回 Vue 应用程序的 HTML 文件
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });

app.get('/tongji',(req,res)=>{
  // const sql = `SELECT * FROM tongji where m1`;
 const sql = `SELECT * FROM tongji`;
  //   const values = [
  //   releForm.Youname,
  // ];

  db.query(sql, (err, result) => {
    if (err) {
      return res.send({ state: 1, message: err });
    }
    if (result) {
      return res.send({ state: 200, message: "添加成功", data: result });
    } else {
      return res.send({ state: 2, message: "失败", data: result });
    }
  });
})



app.get('/tongjis',(req,res)=>{
  // const sql = `SELECT * FROM tongji where m1`;
 const sql = `SELECT * FROM tongji`;
  //   const values = [
  //   releForm.Youname,
  // ];

  db.query(sql, (err, result) => {
    if (err) {
      return res.send({ state: 1, message: err });
    }
    if (result) {
      // console.log(result,'result');
      return res.send({ state: 200, message: "添加成功", data: [result[0].m1,result[0].m2,result[0].m3,result[0].m4,result[0].m5,result[0].m6,result[0].m7,result[0].btntj,result[0].pos1,result[0].pos100] });
    } else {
      return res.send({ state: 2, message: "失败", data: result });
    }
  });
})





app.post('/tjm1',(req,res)=>{
    const { tjm1 } = req.body;
  // const sql = `SELECT * FROM tongji`;
  const sql = `UPDATE tongji SET m1='${tjm1}' where id=0`;
    const values = [
      tjm1
  ];

  db.query(sql, (err, result) => {
    if (err) {
      return res.send({ state: 1, message: err });
    }
    if (result) {
      return res.send({ state: 200, message: "添加成功", data: result });
    } else {
      return res.send({ state: 2, message: "失败", data: result });
    }
  });
})



app.post('/tjm2',(req,res)=>{
  const { tjm1 } = req.body;
// const sql = `SELECT * FROM tongji`;
const sql = `UPDATE tongji SET m2='${tjm1}' where id=0`;
  const values = [
    tjm1
];

db.query(sql, (err, result) => {
  if (err) {
    return res.send({ state: 1, message: err });
  }
  if (result) {
    return res.send({ state: 200, message: "添加成功", data: result });
  } else {
    return res.send({ state: 2, message: "失败", data: result });
  }
});
})






app.post('/tjm3',(req,res)=>{
  const { tjm1 } = req.body;
// const sql = `SELECT * FROM tongji`;
const sql = `UPDATE tongji SET m3='${tjm1}' where id=0`;
  const values = [
    tjm1
];

db.query(sql, (err, result) => {
  if (err) {
    return res.send({ state: 1, message: err });
  }
  if (result) {
    return res.send({ state: 200, message: "添加成功", data: result });
  } else {
    return res.send({ state: 2, message: "失败", data: result });
  }
});
})





app.post('/tjm4',(req,res)=>{
  const { tjm1 } = req.body;
// const sql = `SELECT * FROM tongji`;
const sql = `UPDATE tongji SET m4='${tjm1}' where id=0`;
  const values = [
    tjm1
];

db.query(sql, (err, result) => {
  if (err) {
    return res.send({ state: 1, message: err });
  }
  if (result) {
    return res.send({ state: 200, message: "添加成功", data: result });
  } else {
    return res.send({ state: 2, message: "失败", data: result });
  }
});
})





app.post('/tjm5',(req,res)=>{
  const { tjm1 } = req.body;
// const sql = `SELECT * FROM tongji`;
const sql = `UPDATE tongji SET m5='${tjm1}' where id=0`;
  const values = [
    tjm1
];

db.query(sql, (err, result) => {
  if (err) {
    return res.send({ state: 1, message: err });
  }
  if (result) {
    return res.send({ state: 200, message: "添加成功", data: result });
  } else {
    return res.send({ state: 2, message: "失败", data: result });
  }
});
})
app.post('/pos1',(req,res)=>{
  const { tjm1 } = req.body;
// const sql = `SELECT * FROM tongji`;
const sql = `UPDATE tongji SET pos1='${tjm1}' where id=0`;
  const values = [
    tjm1
];
db.query(sql, (err, result) => {
  if (err) {
    return res.send({ state: 1, message: err });
  }
  if (result) {
    return res.send({ state: 200, message: "添加成功", data: result });
  } else {
    return res.send({ state: 2, message: "失败", data: result });
  }
});
})
app.post('/pos100',(req,res)=>{
  const { tjm1 } = req.body;
// const sql = `SELECT * FROM tongji`;
const sql = `UPDATE tongji SET pos100='${tjm1}' where id=0`;
  const values = [
    tjm1
];

db.query(sql, (err, result) => {
  if (err) {
    return res.send({ state: 1, message: err });
  }
  if (result) {
    return res.send({ state: 200, message: "添加成功", data: result });
  } else {
    return res.send({ state: 2, message: "失败", data: result });
  }
});
})



app.post('/tjm6',(req,res)=>{
  const { tjm1 } = req.body;
// const sql = `SELECT * FROM tongji`;
const sql = `UPDATE tongji SET m6='${tjm1}' where id=0`;
  const values = [
    tjm1
];

db.query(sql, (err, result) => {
  if (err) {
    return res.send({ state: 1, message: err });
  }
  if (result) {
    return res.send({ state: 200, message: "添加成功", data: result });
  } else {
    return res.send({ state: 2, message: "失败", data: result });
  }
});
})




app.post('/gp',(req,res)=>{
  const { tjm1 } = req.body;
// const sql = `SELECT * FROM tongji`;
const sql = `UPDATE tongji SET btntj='${tjm1}' where id=0`;
  const values = [
    tjm1
];

db.query(sql, (err, result) => {
  if (err) {
    return res.send({ state: 1, message: err });
  }
  if (result) {
    return res.send({ state: 200, message: "添加成功", data: result });
  } else {
    return res.send({ state: 2, message: "失败", data: result });
  }
});
})





app.post('/tjm7',(req,res)=>{
  const { tjm1 } = req.body;
// const sql = `SELECT * FROM tongji`;
const sql = `UPDATE tongji SET m7='${tjm1}' where id=0`;
  const values = [
    tjm1
];

db.query(sql, (err, result) => {
  if (err) {
    return res.send({ state: 1, message: err });
  }
  if (result) {
    return res.send({ state: 200, message: "添加成功", data: result });
  } else {
    return res.send({ state: 2, message: "失败", data: result });
  }
});
})

app.get('/',(req,res)=>{
  res.send('我是极客公司服务')
})



// app.post("/addinfor", (req, res) => {
//   const { releForm } = req.body;
  // const sql = `INSERT INTO geek_park (Youname, weixin, Area, InstitutionName, Department, radio, textarea) VALUES (?, ?, ?, ?, ?, ?, ?)`;
//   const values = [
//     releForm.Youname,
//     releForm.weixin,
//     releForm.Area,
//     releForm.InstitutionName,
//     releForm.Department,
//     releForm.radio,
//     releForm.textarea
//   ];

//   db.query(sql, values, (err, result) => {
//     if (err) {
//       return res.send({ state: 1, message: err });
//     }
//     if (result) {
//       return res.send({ state: 200, message: "添加成功", data: result });
//     } else {
//       return res.send({ state: 2, message: "添加成功", data: result });
//     }
//   });
// });

// app.post("/agilist", (req, res) => {
//   const { qrId } = req.body;
//   const sql = `SELECT * FROM agilist WHERE name = ?`;
//   const values = [qrId];

//   db.query(sql, values, (err, result) => {
//     if (err) {
//       return res.send({ state: 1, message: err });
//     }
//     if (result) {
//       return res.send({ state: 200, message: "查询成功", data: result });
//     } else {
//       return res.send({ state: 2, message: "查询成功", data: result });
//     }
//   });
// });
// select * from AGI_tj
// app.post("/getList", (req, res) => {
//   const sql = `SELECT * FROM geek_park`;

//   db.query(sql, (err, result) => {
//     if (err) {
//       return res.send({ state: 1, message: err });
//     }
//     if (result.length > 0) {
//       return res.send({ state: 200, message: "查询成功", data: result });
//     } else {
//       return res.send({ state: 2, message: "暂无数据", data: result });
//     }
//   });
// });

// app.post("/access_token", async (req, res) => {
//   try {
//     const response = await axios.post('https://api.weixin.qq.com/cgi-bin/stable_token', {
//       'grant_type': 'client_credential',
//       'appid': 'wx2edc079ba3810e52',
//       'secret': 'e9ac47045db3eb2c2e7950fdcb14ab00'
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     });

//     if (response.data.errcode) {
//       return res.send({
//         data: response.data.errmsg,
//         code: response.data.errcode
//       });
//     } else {
//       const generatescheme = await axios.post(`https://api.weixin.qq.com/wxa/generatescheme?access_token=${response.data.access_token}`);
//       return res.send({
//         data: {
//           URl: generatescheme.data.openlink,
//           code: generatescheme.data.errmsg
//         }
//       });
//     }
//   } catch (error) {
//     console.error(error);
//     return res.send({ state: 1, message: "服务器错误" });
//   }
// });
// http://192.168.1.27:3000/
// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });


// const port = 3000;
app.listen(3000, () => {
  console.log(`http://192.168.1.27:3000/`);
});