
      (function (d, t) {
        var v = d.createElement(t),
          s = d.getElementsByTagName(t)[0];
        v.onload = function () {
          window.voiceflow.chat
            .load({
              verify: { projectID: "6605e1d0e773c6d866e27b2d" },
              url: "https://general-runtime.voiceflow.com",
              versionID: "production",
            })
            .then(() => {
              window.voiceflow.chat.proactive.push({
                type: "text",
                payload: {
                  message:
                    "Starten Sie die Revolution Ihres Unternehmens – klicken Sie hier, um mit unserem Agenten zu sprechen!",
                },
              });
            });
        };
        v.src = "https://cdn.jsdelivr.net/gh/dome385/bundle/bundle.mjs";
        v.type = "text/javascript";
        s.parentNode.insertBefore(v, s);
      })(document, "script");
