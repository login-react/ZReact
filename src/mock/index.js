import Mockjs from 'mockjs';


// 数据
const data = [
    {
        key:'1',
        name:'测试情况1',
        age:32,
        address:'西湖区湖底公园'
    },
    {
        key: '2',
        name:'测试情况2',
        age: 31,
        address:'苏区园林'
    }
];




// 接口
Mockjs.mock('/api/detail', data);

















