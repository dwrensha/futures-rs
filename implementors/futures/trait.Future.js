(function() {var implementors = {};
implementors["futures"] = [];implementors["futures_io"] = ["impl&lt;R,&nbsp;W&gt; <a class='trait' href='futures/trait.Future.html' title='futures::Future'>Future</a> for <a class='struct' href='futures_io/struct.Copy.html' title='futures_io::Copy'>Copy</a>&lt;R,&nbsp;W&gt; <span class='where'>where R: <a class='trait' href='futures_io/trait.ReadTask.html' title='futures_io::ReadTask'>ReadTask</a>, W: <a class='trait' href='futures_io/trait.WriteTask.html' title='futures_io::WriteTask'>WriteTask</a></span>","impl&lt;A&gt; <a class='trait' href='futures/trait.Future.html' title='futures::Future'>Future</a> for <a class='struct' href='futures_io/struct.Flush.html' title='futures_io::Flush'>Flush</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='futures_io/trait.WriteTask.html' title='futures_io::WriteTask'>WriteTask</a></span>","impl&lt;A,&nbsp;T&gt; <a class='trait' href='futures/trait.Future.html' title='futures::Future'>Future</a> for <a class='struct' href='futures_io/struct.ReadExact.html' title='futures_io::ReadExact'>ReadExact</a>&lt;A,&nbsp;T&gt; <span class='where'>where A: <a class='trait' href='futures_io/trait.ReadTask.html' title='futures_io::ReadTask'>ReadTask</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsMut.html' title='core::convert::AsMut'>AsMut</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; + 'static</span>","impl&lt;A&gt; <a class='trait' href='futures/trait.Future.html' title='futures::Future'>Future</a> for <a class='struct' href='futures_io/struct.ReadToEnd.html' title='futures_io::ReadToEnd'>ReadToEnd</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='futures_io/trait.ReadTask.html' title='futures_io::ReadTask'>ReadTask</a></span>","impl&lt;A,&nbsp;T&gt; <a class='trait' href='futures/trait.Future.html' title='futures::Future'>Future</a> for <a class='struct' href='futures_io/struct.WriteAll.html' title='futures_io::WriteAll'>WriteAll</a>&lt;A,&nbsp;T&gt; <span class='where'>where A: <a class='trait' href='futures_io/trait.WriteTask.html' title='futures_io::WriteTask'>WriteTask</a>, T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html' title='core::convert::AsRef'>AsRef</a>&lt;<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>[</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.u8.html'>u8</a><a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.slice.html'>]</a>&gt; + 'static</span>",];implementors["futures_cpupool"] = ["impl&lt;R:&nbsp;<a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static&gt; <a class='trait' href='futures/trait.Future.html' title='futures::Future'>Future</a> for <a class='struct' href='futures_cpupool/struct.CpuFuture.html' title='futures_cpupool::CpuFuture'>CpuFuture</a>&lt;R&gt;",];implementors["futures_mio"] = ["impl <a class='trait' href='futures/trait.Future.html' title='futures::Future'>Future</a> for <a class='struct' href='futures_mio/struct.AddSource.html' title='futures_mio::AddSource'>AddSource</a>","impl <a class='trait' href='futures/trait.Future.html' title='futures::Future'>Future</a> for <a class='struct' href='futures_mio/struct.AddTimeout.html' title='futures_mio::AddTimeout'>AddTimeout</a>","impl&lt;F,&nbsp;A&gt; <a class='trait' href='futures/trait.Future.html' title='futures::Future'>Future</a> for <a class='struct' href='futures_mio/struct.AddLoopData.html' title='futures_mio::AddLoopData'>AddLoopData</a>&lt;F,&nbsp;A&gt; <span class='where'>where F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnOnce.html' title='core::ops::FnOnce'>FnOnce</a>() -&gt; A + <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> + 'static, A: 'static</span>","impl&lt;A:&nbsp;<a class='trait' href='futures/trait.Future.html' title='futures::Future'>Future</a>&gt; <a class='trait' href='futures/trait.Future.html' title='futures::Future'>Future</a> for <a class='struct' href='futures_mio/struct.LoopData.html' title='futures_mio::LoopData'>LoopData</a>&lt;A&gt;","impl <a class='trait' href='futures/trait.Future.html' title='futures::Future'>Future</a> for <a class='struct' href='futures_mio/struct.Timeout.html' title='futures_mio::Timeout'>Timeout</a>",];implementors["futures_tls"] = ["impl&lt;S&gt; <a class='trait' href='futures/trait.Future.html' title='futures::Future'>Future</a> for <a class='struct' href='futures_tls/struct.ClientHandshake.html' title='futures_tls::ClientHandshake'>ClientHandshake</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> + <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a>&lt;Item=<a class='enum' href='futures_io/enum.Ready.html' title='futures_io::Ready'>Ready</a>,&nbsp;Error=<a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt;</span>","impl&lt;S&gt; <a class='trait' href='futures/trait.Future.html' title='futures::Future'>Future</a> for <a class='struct' href='futures_tls/struct.ServerHandshake.html' title='futures_tls::ServerHandshake'>ServerHandshake</a>&lt;S&gt; <span class='where'>where S: <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Write.html' title='std::io::Write'>Write</a> + <a class='trait' href='futures/stream/trait.Stream.html' title='futures::stream::Stream'>Stream</a>&lt;Item=<a class='enum' href='futures_io/enum.Ready.html' title='futures_io::Ready'>Ready</a>,&nbsp;Error=<a class='struct' href='https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html' title='std::io::error::Error'>Error</a>&gt;</span>",];implementors["futures_curl"] = ["impl <a class='trait' href='futures/trait.Future.html' title='futures::Future'>Future</a> for <a class='struct' href='futures_curl/struct.Perform.html' title='futures_curl::Perform'>Perform</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
