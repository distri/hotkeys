Hotkeys
=======

Hotkeys module for the editors.

    module.exports = (I={}, self=Core(I)) ->
      self.extend
        addHotkey: (key, method) ->
          $(document).bind "keydown", key, (event) ->
            if typeof method is "function"
              method
                editor: self
            else
              self[method]()

            event.preventDefault()

      return self
