Hotkeys = require "../main"

describe "hotkeys", ->
  it "should be hot", (done) ->
    hotkeys = Hotkeys()
    
    hotkeys.addHotkey "a", ->
      done()

    $(document).trigger $.Event "keydown",
      which: 65 # a
      keyCode: 65
