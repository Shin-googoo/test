def many_exits(exit_no):
    if exit_no==1:
        return 'Exit 1'
    if exit_no==2:
        return 'Exit 2'
    if exit_no==3:
        return 'Exit 3'

    return '그런 출구는 없습니다.'

print(many_exits(1))
print(many_exits(2))
print(many_exits(9))
