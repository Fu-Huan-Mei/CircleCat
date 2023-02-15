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
#2023年2月8日
#1、逻辑错误logic error：逻辑错误是指代码有误，但是符合了 Python 的语法规则。 比如，如果想实现x + 2，但写成了x + 4，就属于逻辑错误。
'''
2、变量(variable)：
(1)含义：存储数据的容器。你可以使用变量来存储任何类型的数据，包括数字、字符串、列表、字典等。
(2)注意：
要使用变量，需要先声明变量，然后使用赋值运算符 = 将数据存储到变量中
赋值运算符 = 的左边必须是变量名，不能是表达式；但右边可以是任意表达式
'''
#3、算术运算符:+ - 
'''
4、标识符
（1）作用：用来命名变量、函数、类、模块等程序元素的字符串
（2）书写：字母或下划线（_)开头，并且不能以数字开头
（3）主语：严格区分大小写；不能使用关键字和保留字
（4）命名规范：
变量名和函数名应使用小写字母，并在单词之间使用下划线来分隔。例如：my_variable、my_function
类名应该使用首字母大写的驼峰式命名法。例如：MyClass、MySuperClass
常量应该使用大写字母，并在单词之间使用下划线来分隔。例如：MY_CONSTANT
不要使用单个字母或数字作为标识符。应使用有意义的名称，以便更好地理解代码
不要使用单个字母或数字作为标识符。应使用有意义的名称，以便更好地理解代码
不要使用与 Python 内置函数同名
'''
'''
5、对比整数，字符串，和浮点数：
（1）字符串和整数可以用相等和关系运算符来比较
（2）但是对比浮点数是否相等不能用相等运算符，
因为浮点数存储时存在精度问题(比如 π != 3.14，但是我们说到3.14 3.1415 3.1415926的时候也许都在指代π)。
6、type() 是一个内置函数，用于返回一个对象的类型。  eg:print(type(x)) 
7、成员运算符：in和not in  value
（1）功能：用于检查一个值是否在另一个容器中
（2）注意：在字典中，一个键是字典的成员意味着这个特定的键存在于字典中；对字典用成员运算只会检查键，不会检查值
8、标识运算符：is 和 is not   id
（1）功能：用于检查两个对象是否为同一个对象（即是否具有相同的内存地址）
（2）注意:标识运算符 is 和 is not 是用于检查两个对象是否为同一个对象的，也就是储存地址是否相同，
而不是检查两个对象的值是否相等。如果希望检查两个对象的值是否相等，应该使用相等运算符（==）或不等运算符（!=）
9、运算符优先级：一个常见的错误是写出的表达式中的计算顺序和预期的不同。所以建议在表达式中多使用小括号，使计算顺序更明确
**	指数运算
~ + -	位运算
* / % //	乘除余数运算
+ -	加减法
>> <<	移位运算
&	按位与
^	按位异或
|	按位或
<= < > >=	比较运算符
<> == !=	等于运算符
= %= /= //= -= += *= **=	赋值运算符
is, is not	标识运算符
in, not in	成员资格运算符
not, and, or(优先级从高到低）	逻辑运算符
10、代码块（block）：
（1）简介：在 Python 中，代码块是由缩进的语句构成的，也就是说缩进起到了代码块的划分的作用
（2）注意：在 Python 中，代码块是由缩进的语句构成的，也就是说缩进起到了代码块的划分的作用
（3）常见错误：在缩进时混合使用空格和tab

'''




