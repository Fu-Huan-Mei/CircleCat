#15题：整个思路是将数字转换为字符串然后遍历字符串找出字符’1‘的数量
# param = int(input())
# def count_ones(param):
#     li = str(param)
#     count = 0
#     for i in li:
#     	if(i=="1"):#这里好好看看
#         	count = count + 1
#     	else:
#         	count = count 
#     return count
# print(count_ones(param))


#17题：
# x = int(input())
# y = int(input())
# def increment_by_three(x,y):
# 	while (x < y):
# 		print(x)
# 		x = x + 3
# increment_by_three(x,y)
#18题：没有读懂题目
param = input()
def count_spaces_and_commas(x):
	a = 0 
	b = 0
	for i in param:
		if(i == ","):
			a = a + 1
	for i in param:
		if(i == " "):
			b = b + 1
	print("有"+str(a)+"个逗号"+"和"+str(b)+"个空格")
count_spaces_and_commas(param)

# #19题：回文s
param = input()
def is_palindrome(param):
    reverse_param=""
    for i in range(len(param)-1,-1,-1):#倒数遍历
        reverse_param+=param[i]# reverse_param =  reverse_param + param[i]  拼串
    temp  = reverse_param
    
    if temp == param:
        return True
    else:
        return False
# print(is_palindrome(param))


