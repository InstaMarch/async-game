# Parseq Playground

These are a number of programs that use a simple parseq requestor to express
how you may use parseq.

## Usage
The examples can be run like so:
`. run-example.sh example-file.mjs` 

For instance:
`. run-example.sh complete-parallel.mjs`

If you make changes to the code, you can JSLint your changes using the command
`. lint-all.sh`

## List of Examples
* complete-parallel.mjs
* parallel-object.mjs
* sequence-failure.mjs
* complete-sequences.mjs
* parallel-sequences.mjs
* fallback-failure.mjs
* race-cancellation.mjs

## Organization
The original code is completely in examples and in source. Source contains our
requestor factory called `makeTimeout`. `makeTimeouts` allows wun to make an
array of requestors that will reach their callbacks eventually in equal intervals of time.

## Special Thanks
Thank you so much to the Imaginary Jobs Program and CQC teams: Mike Ricos,
Bernadette St. George and Zachary Overhulser for all you've done to get us here.

Thanks also to Douglas Crockford for writing Parseq and making this possible.
