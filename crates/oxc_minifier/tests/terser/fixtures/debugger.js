keep_debugger: {
    options = {
        drop_debugger: false,
    }
    input: {
        debugger;
    }
    expect: {
        debugger
    }
}

drop_debugger: {
    options = {
        drop_debugger: true,
    }
    input: {
        debugger;
    }
    expect: {
    }
}
