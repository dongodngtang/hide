export default {
    //内部测试
    dev: 'http://deshpro.ngrok.cc/v10/',
    dev_ci_at: 'http://192.168.2.231:8801/v10/',

    //test分支用来发布版本  test_ci_at用来跑自动化测试
    test: 'http://test.api.deshpro.com/v10/',
    test_ci_at: 'http://106.75.134.18:8801/v10/',

    //production 用来发布正式生产环境
    staging: 'http://106.75.136.9:8801/v10/',
    production: 'https://api.deshpro.com/v10/',
}