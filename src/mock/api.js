import Mock from 'mockjs'
Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id": 12,
        "username": "admin",
        "email": "...",
        "phone": null,
        "role": 0,
        "createTime": 123,
        "updataTime":456
    }
})