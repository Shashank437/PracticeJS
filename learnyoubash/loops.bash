i=$1
for (( i = $1; i < $2; i++ )); do 
  [ ! $(( $i % 2 )) -eq 0 ] || echo $i
  i=$(( $i + 1 ))
done