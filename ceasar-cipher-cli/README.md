## CAESAR CIPHER CLI APPLICATION

### CLI app implementing Caesar's shift. 

### Usage:
```
node ceasar options
```

Options:
```
  -s, --shift <num>        number of letters to shift
  -a, --action <action>    action to perform (encode/decode)
  -i, --input <filename>   input file path
  -o, --output <filename>  output file path
  -h, --help               
```
App can be stopped with standard ctrl+c input

```
node main -s 1 -a encode                                stdin/stdout input/output
node main -s 1 -a encrypt -i input.txt                  file/stdout input/output
node main -s 1 -a encrypt -o output.txt                 stdin/file input/output
node main -s 1 -a decrypt -i input.txt -o output.txt    file/file input/output
```