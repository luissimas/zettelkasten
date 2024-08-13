Like [[Go]], [[Rust]] favor errors as values in the case of recoverable errors and panics in the case of unrecoverable errors. Unlike Go, Rust has a rich type system with [[Algebraic data types]], which opens up the possibilities for error handling via a `Result<T, E>` type.

We can use [[Pattern matching]] to extract either the value or the error from a `Result` type. Several methods such as `ok`, `expect` and `unwrap` are defined on this type so we can more idiomatically handle the errors.

```rust
use std::{
    fs::File,
    io::{ErrorKind, Write},
};

fn main() {
    let mut greeting_file = match File::options().append(true).open("hello.txt") {
        Ok(file) => file,
        Err(error) => match error.kind() {
            ErrorKind::NotFound => File::create("hello.txt").expect("Could not create the file"),
            error => panic!("Problem opening the file: {error:?}"),
        },
    };
    greeting_file
        .write(b"some bytes\n")
        .expect("Could not write to file");
}
```

The `?` operator can be used to propagate errors early to the caller, much like the `if err != nil return err` pattern in [[Go]]. This operator can be used on the `Result` and `Option` types (or any type that implements the `FromResidual` [[Rust traits|trait]]).

```rust
fn read_username_from_file() -> Result<String, io::Error> {
    let mut username = String::new();
    File::open("hello.txt")?.read_to_string(&mut username)?;

    Ok(username)
}
```

Additionally, the `main` function can also return a `Result` (any type that implements the `std::process::Termination` [[Rust traits|trait]] to be more precise). In that case, the program exists with a return code of 0 or non 1 depending of the result value.

```rust
use std::error::Error;
use std::fs::File;

fn main() -> Result<(), Box<dyn Error>> {
    let greeting_file = File::open("hello.txt")?;

    Ok(())
}
```
