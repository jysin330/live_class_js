//  exeption handaling---->

// try - wrap up the code which can throw the error
// catch: write the code to do something when error occurs
//  finally: it will always executed

try {
    let firstname = "jyoti";
    console.log(firstname + " " + lastname);
} catch (err) {
    // console.log(err)
    console.log(err.name)
    console.log(err.message)
}
finally {
    console.log("hello how are you")
}