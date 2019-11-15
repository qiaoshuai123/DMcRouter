// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
      parser: 'babel-eslint'
  },
  env: {
      browser: true,
  },
  extends: [
      // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
      // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
      'plugin:vue/essential',
      // https://github.com/standard/standard/blob/master/docs/RULES-en.md
      'standard'
  ],
  // required to lint *.vue files
  plugins: [
      'vue'
  ],
  // add your custom rules here
  rules: {
      "generator-star-spacing": 'off', // generator函数*前后空格
      "no-alert": 0, //禁止使用alert confirm prompt
      "no-class-assign": 2, //禁止给类赋值
      "no-cond-assign": 2, //禁止在条件表达式中使用赋值语句
      "no-const-assign": 2, //禁止修改const声明的变量
      "no-constant-condition": 2, //禁止在条件中使用常量表达式 if(true) if(1)
      "no-div-regex": 1, //不能使用看起来像除法的正则表达式/=foo/
      "no-dupe-keys": 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
      "no-dupe-args": 2, //函数参数不能重复
      "no-invalid-this": 2, //禁止无效的this，只能用在构造器，类，对象字面量
      "no-new-func": 1, //禁止使用new Function
      "no-new-object": 2, //禁止使用new Object()
      "no-new-require": 2, //禁止使用new require
      "no-unused-vars": [2, { "vars": "all", "args": "after-used" }], //不能有声明后未被使用的变量或参数
      "camelcase": 2, //强制驼峰法命名
      "curly": [2, "all"], //必须使用 if(){} 中的{}
      "default-case": 2, //switch语句最后必须有default
      "eqeqeq": 2, //必须使用全等
      "indent": [2, 4], //缩进风格
      "use-isnan": 2, //禁止比较时使用NaN，只能用isNaN()
      "no-mixed-spaces-and-tabs": [0], // tab键和空格
      "semi": 0, // 不检测分号，
      "space-infix-ops": 2, // 前后空格，
      "comma-spacing": 2, // 逗号后面得有空格，
      "no-multiple-empty-lines": 0, // 关闭多行空格
      "eol-last": 2, // 文件已空行结尾 
      "no-constant-condition": 2 // 条件语句禁止使用true这些常量
  }
}// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true,
    },
    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential',
        // https://github.com/standard/standard/blob/master/docs/RULES-en.md
        'standard'
    ],
    // required to lint *.vue files
    plugins: [
        'vue'
    ],
    // add your custom rules here
    rules: {
        "generator-star-spacing": 'off', // generator函数*前后空格
        "no-alert": 0, //禁止使用alert confirm prompt
        "no-class-assign": 2, //禁止给类赋值
        "no-cond-assign": 2, //禁止在条件表达式中使用赋值语句
        "no-const-assign": 2, //禁止修改const声明的变量
        "no-constant-condition": 2, //禁止在条件中使用常量表达式 if(true) if(1)
        "no-div-regex": 1, //不能使用看起来像除法的正则表达式/=foo/
        "no-dupe-keys": 2, //在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-dupe-args": 2, //函数参数不能重复
        "no-invalid-this": 2, //禁止无效的this，只能用在构造器，类，对象字面量
        "no-new-func": 1, //禁止使用new Function
        "no-new-object": 2, //禁止使用new Object()
        "no-new-require": 2, //禁止使用new require
        "no-unused-vars": [2, { "vars": "all", "args": "after-used" }], //不能有声明后未被使用的变量或参数
        "camelcase": 2, //强制驼峰法命名
        "curly": [2, "all"], //必须使用 if(){} 中的{}
        "default-case": 2, //switch语句最后必须有default
        "eqeqeq": 2, //必须使用全等
        "indent": [2, 4], //缩进风格
        "use-isnan": 2, //禁止比较时使用NaN，只能用isNaN()
        "no-mixed-spaces-and-tabs": [0], // tab键和空格
        "semi": 0, // 不检测分号，
        "space-infix-ops": 2, // 前后空格，
        "comma-spacing": 2, // 逗号后面得有空格，
        "no-multiple-empty-lines": 0, // 关闭多行空格
        "eol-last": 2, // 文件已空行结尾 
        "no-constant-condition": 2 // 条件语句禁止使用true这些常量
    }
}