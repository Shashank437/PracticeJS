even() {
  [[ $1 -lt $2 ]] || return

  indent="$3"
  if [[ $(( $1 % 2 )) -eq 0 ]]; then
    i=0
    for (( i = 0; i < $indent; i++ )); do
      echo -n ' '
    done
    echo $1
    indent=$(( indent + 1 ))
  fi

  even $(( $1 + 1 )) $2 $indent
}

main() {
  echo $FUNCNAME
  even $1 $2 1
}

main $1 $2