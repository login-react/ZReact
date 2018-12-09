import Mockjs from 'mockjs';

const data = {
    "arr":[
        {"city":"hebei","names":"chenbin"},
        {"city":"nanyang","names":"xuexue"},
        {"city":"beijing","names":"dongge"}
    ]
};




Mockjs.mock('/api/demo', data);

















