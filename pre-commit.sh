git stash -q --keep-index

FILES_BEFORE=`git diff --cached --name-status |awk '{print $2}' |sort`

grunt dist
RESULT=$?

FILES_AFTER=`git diff --cached --name-status |awk '{print $2}' |sort`

diff -q <(echo $FILES_BEFORE) <(echo $FILES_AFTER)
RESULT2=$?

git stash pop -q

[[ $RESULT -ne 0 || $RESULT2 -ne 0 ]] && echo "grunt dist failed or changed a file you tried to check in" && exit 1
exit 0
