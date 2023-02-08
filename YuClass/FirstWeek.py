# 2023-2-3
#1、print()函数
#（1）输入屏幕：在python中，如果要把一些东西输入屏幕到上，可以使用print()方法
#（2）打印字面字符串：如果要打印字面字符串，把要打印的东西用引号包裹并写在括号里
#（3）字面字符串（string literal）：用引号包裹起来的文字部分，它可以有字母，数字，空格，或者符号
#（4）打印变量值：如果要打印一个变量的值，就在括号里写上变量名，不要加引号
#（5）打印结果：
#显示在不同行：print方法在打印时会在后面自动创建一个新的空行，所以每次使用print都会打印在不同的行数
print('I am')#I am
print('Python!')#Python!
#显示在同一行：想要把要打印的东西分别用多个print方法打印，又想要让它们显示在同一行，可以使用end=' '
print('I am', end=' ')
print('Python!')#I am Python!（解释：m和Python中间有一个空格，这个空格就是end=' '的引号中的空格）
#以end = ''表示不使用任何东西分隔
print('I am', end='=')
print('Python!')#I am=Python!
#如果想要两次打印在同一行且不用任何东西分隔
print('I am', end='')
print('Python!')#I amPython!

print(1+1)#2
print((5+5)*5)#50
print("生日快乐！")
print("你好")
print("我在吃饭")
print()
print("       你好")
print("再见")
print()
#2、语法错误
#（1）含义：代码不符合 Python 的语法规则，这会导致 Python 无法解析代码
#（2）原因：拼写错误、缩进错误、括号不匹配等问题
#3、运行时错误
#（1）语法错误（SyntaxError）：程序包含不正确的代码
#（2）换行错误（IndentationError）：程序中的语句没有正确换行。
#（3）值错误（ValueError）：是用来错误的值，比如试图把字母转换成整数。
#（4）名称错误（NameError）：程序试图使用不存在的变量。
#（5）类型错误（TypeError）：一个运算使用了错误的类型，比如把字符和数字相加。



