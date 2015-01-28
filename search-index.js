var searchIndex = {};
searchIndex['term'] = {"items":[[0,"","term","Terminal formatting library."],[4,"Attr","","Terminal attributes for use with term.attr()."],[13,"Bold","","Bold (or possibly bright) mode",0],[13,"Dim","","Dim mode, also called faint or half-bright. Often not supported",0],[13,"Italic","","Italics mode. Often not supported",0],[13,"Underline","","Underline mode",0],[13,"Blink","","Blink mode",0],[13,"Standout","","Standout mode. Often implemented as Reverse, sometimes coupled with Bold",0],[13,"Reverse","","Reverse mode, inverts the foreground and background colors",0],[13,"Secure","","Secure mode, also called invis mode. Hides the printed text",0],[13,"ForegroundColor","","Convenience attribute to set the foreground color",0],[13,"BackgroundColor","","Convenience attribute to set the background color",0],[5,"stdout","","Return a Terminal wrapping stdout, or None if a terminal couldn't be\nopened."],[5,"stderr","","Return a Terminal wrapping stderr, or None if a terminal couldn't be\nopened."],[0,"terminfo","","Terminfo database interface."],[3,"TermInfo","term::terminfo","A parsed terminfo database entry."],[12,"names","","Names for the terminal",1],[12,"bools","","Map of capability name to boolean value",1],[12,"numbers","","Map of capability name to numeric value",1],[12,"strings","","Map of capability name to raw (unexpanded) string",1],[3,"TerminfoTerminal","","A Terminal that knows how many colors it supports, with a reference to its\nparsed Terminfo database record."],[4,"Error","","A terminfo creation error."],[13,"TermUnset","","TermUnset Indicates that the environment doesn't include enough information to find\nthe terminfo entry.",2],[13,"MalformedTerminfo","","MalformedTerminfo indicates that parsing the terminfo entry failed.",2],[13,"IoError","","IoError forwards any IoErrors encountered when finding or reading the terminfo entry.",2],[0,"searcher","","ncurses-compatible database discovery"],[5,"get_dbpath_for_term","term::terminfo::searcher","Return path to database entry for `term`"],[0,"parser","term::terminfo","TermInfo format parsing.\nncurses-compatible compiled terminfo format parsing (term(5))"],[0,"compiled","term::terminfo::parser","ncurses-compatible compiled terminfo format parsing (term(5))"],[5,"parse","term::terminfo::parser::compiled","Parse a compiled terminfo entry, using long capability names if `longnames` is true"],[5,"msys_terminfo","","Create a dummy TermInfo struct for msys terminals"],[7,"boolfnames","",""],[7,"boolnames","",""],[7,"numfnames","",""],[7,"numnames","",""],[7,"stringfnames","",""],[7,"stringnames","",""],[0,"parm","term::terminfo","Parameterized string expansion"],[3,"Variables","term::terminfo::parm","Container for static and dynamic variable arrays"],[4,"Param","","Types of parameters a capability can use"],[13,"Words","","",3],[13,"Number","","",3],[5,"expand","","Expand a parameterized capability"],[11,"clone","","",3],[11,"new","","Return a new zero-initialized Variables",4],[11,"fmt","term::terminfo","",1],[11,"description","","",2],[11,"cause","","",2],[11,"fmt","","",2],[11,"from_env","","Create a TermInfo based on current environment.",1],[11,"from_name","","Create a TermInfo for the named terminal.",1],[11,"from_path","","Parse the given TermInfo.",1],[11,"fg","","",5],[11,"bg","","",5],[11,"attr","","",5],[11,"supports_attr","","",5],[11,"reset","","",5],[11,"get_ref","","",5],[11,"get_mut","","",5],[11,"unwrap","","",5],[11,"new_with_terminfo","","Create a new TerminfoTerminal with the given TermInfo and Writer.",5],[11,"new","","Create a new TerminfoTerminal for the current environment with the given Writer.",5],[11,"write","","",5],[11,"flush","","",5],[0,"color","term","Terminal color definitions"],[6,"Color","term::color","Number for a terminal color"],[17,"BLACK","",""],[17,"RED","",""],[17,"GREEN","",""],[17,"YELLOW","",""],[17,"BLUE","",""],[17,"MAGENTA","",""],[17,"CYAN","",""],[17,"WHITE","",""],[17,"BRIGHT_BLACK","",""],[17,"BRIGHT_RED","",""],[17,"BRIGHT_GREEN","",""],[17,"BRIGHT_YELLOW","",""],[17,"BRIGHT_BLUE","",""],[17,"BRIGHT_MAGENTA","",""],[17,"BRIGHT_CYAN","",""],[17,"BRIGHT_WHITE","",""],[6,"StdTerminal","term","Alias for stderr/stdout terminals."],[8,"Terminal","","A terminal with similar capabilities to an ANSI Terminal\n(foreground/background colors etc)."],[10,"fg","","Sets the foreground color to the given color.",6],[10,"bg","","Sets the background color to the given color.",6],[10,"attr","","Sets the given terminal attribute, if supported.  Returns `Ok(true)`\nif the attribute was supported, `Ok(false)` otherwise, and `Err(e)` if\nthere was an I/O error.",6],[10,"supports_attr","","Returns whether the given terminal attribute is supported.",6],[10,"reset","","Resets all terminal attributes and color to the default.",6],[10,"get_ref","","Gets an immutable reference to the stream inside",6],[10,"get_mut","","Gets a mutable reference to the stream inside",6],[8,"UnwrappableTerminal","","A terminal which can be unwrapped."],[10,"unwrap","","Returns the contained stream, destroying the `Terminal`",7],[11,"eq","","",0],[11,"ne","","",0],[11,"fmt","","",0]],"paths":[[4,"Attr"],[3,"TermInfo"],[4,"Error"],[4,"Param"],[3,"Variables"],[3,"TerminfoTerminal"],[8,"Terminal"],[8,"UnwrappableTerminal"]]};
searchIndex['log'] = {"items":[[0,"","log","Utilities for program-wide and customizable logging"],[3,"LogLevel","","Wraps the log level with fmt implementations."],[3,"LogRecord","","A LogRecord is created by the logging macros, and passed as the only\nargument to Loggers."],[12,"module_path","","The module path of where the LogRecord originated.",0],[12,"level","","The LogLevel of this record.",0],[12,"args","","The arguments from the log line.",0],[12,"file","","The file of where the LogRecord originated.",0],[12,"line","","The line number of where the LogRecord originated.",0],[5,"set_logger","","Replaces the task-local logger with the specified logger, returning the old\nlogger."],[0,"macros","","Logging macros"],[17,"MAX_LOG_LEVEL","","Maximum logging level of a module that can be specified. Common logging\nlevels are found in the DEBUG/INFO/WARN/ERROR constants."],[17,"DEBUG","","Debug log level"],[17,"INFO","","Info log level"],[17,"WARN","","Warn log level"],[17,"ERROR","","Error log level"],[8,"Logger","","A trait used to represent an interface to a task-local logger. Each task\ncan have its own custom logger which can respond to logging messages\nhowever it likes."],[10,"log","","Logs a single message described by the `record`.",1],[11,"fmt","","",2],[11,"partial_cmp","","",2],[11,"lt","","",2],[11,"le","","",2],[11,"gt","","",2],[11,"ge","","",2],[11,"eq","","",2],[11,"ne","","",2],[11,"fmt","","",2],[11,"fmt","","",0],[14,"log!","","The standard logging macro"],[14,"error!","","A convenience macro for logging at the error log level."],[14,"warn!","","A convenience macro for logging at the warning log level."],[14,"info!","","A convenience macro for logging at the info log level."],[14,"debug!","","A convenience macro for logging at the debug log level. This macro can also\nbe omitted at compile time by passing `--cfg ndebug` to the compiler. If\nthis option is not passed, then debug statements will be compiled."],[14,"log_enabled!","","A macro to test whether a log level is enabled for the current module."]],"paths":[[3,"LogRecord"],[8,"Logger"],[3,"LogLevel"]]};

searchIndex['regex'] = {"items":[[0,"","regex","This crate provides a native implementation of regular expressions that is\nheavily based on RE2 both in syntax and in implementation. Notably,\nbackreferences and arbitrary lookahead/lookbehind assertions are not\nprovided. In return, regular expression searching provided by this package\nhas excellent worst case performance. The specific syntax supported is\ndocumented further down."],[3,"Error","","Error corresponds to something that can go wrong while parsing\na regular expression."],[12,"pos","","The *approximate* character index of where the error occurred.",0],[12,"msg","","A message describing the error.",0],[3,"Captures","","Captures represents a group of captured strings for a single match."],[3,"SubCaptures","","An iterator over capture groups for a particular match of a regular\nexpression."],[3,"SubCapturesPos","","An iterator over capture group positions for a particular match of a\nregular expression."],[3,"FindCaptures","","An iterator that yields all non-overlapping capture groups matching a\nparticular regular expression."],[3,"FindMatches","","An iterator over all non-overlapping matches for a particular string."],[3,"NoExpand","","NoExpand indicates literal string replacement."],[3,"RegexSplits","","Yields all substrings delimited by a regular expression match."],[3,"RegexSplitsN","","Yields at most `N` substrings delimited by a regular expression match."],[4,"Regex","","A compiled regular expression"],[5,"quote","","Escapes all regular expression meta characters in `text`."],[5,"is_match","","Tests if the given regular expression matches somewhere in the text given."],[11,"fmt","","",0],[11,"fmt","","",0],[11,"clone","","",1],[11,"fmt","","Shows the original regular expression.",1],[11,"fmt","","Shows the original regular expression.",1],[11,"new","","Compiles a dynamic regular expression. Once compiled, it can be\nused repeatedly to search, split or replace text in a string.",1],[11,"is_match","","Returns true if and only if the regex matches the string given.",1],[11,"find","","Returns the start and end byte range of the leftmost-first match in\n`text`. If no match exists, then `None` is returned.",1],[11,"find_iter","","Returns an iterator for each successive non-overlapping match in\n`text`, returning the start and end byte indices with respect to\n`text`.",1],[11,"captures","","Returns the capture groups corresponding to the leftmost-first\nmatch in `text`. Capture group `0` always corresponds to the entire\nmatch. If no match is found, then `None` is returned.",1],[11,"captures_iter","","Returns an iterator over all the non-overlapping capture groups matched\nin `text`. This is operationally the same as `find_iter` (except it\nyields information about submatches).",1],[11,"split","","Returns an iterator of substrings of `text` delimited by a match\nof the regular expression.\nNamely, each element of the iterator corresponds to text that *isn't*\nmatched by the regular expression.",1],[11,"splitn","","Returns an iterator of at most `limit` substrings of `text` delimited\nby a match of the regular expression. (A `limit` of `0` will return no\nsubstrings.)\nNamely, each element of the iterator corresponds to text that *isn't*\nmatched by the regular expression.\nThe remainder of the string that is not split will be the last element\nin the iterator.",1],[11,"replace","","Replaces the leftmost-first match with the replacement provided.\nThe replacement can be a regular string (where `$N` and `$name` are\nexpanded to match capture groups) or a function that takes the matches'\n`Captures` and returns the replaced string.",1],[11,"replace_all","","Replaces all non-overlapping matches in `text` with the\nreplacement provided. This is the same as calling `replacen` with\n`limit` set to `0`.",1],[11,"replacen","","Replaces at most `limit` non-overlapping matches in `text` with the\nreplacement provided. If `limit` is 0, then all non-overlapping matches\nare replaced.",1],[11,"as_str","","Returns the original string of this regex.",1],[11,"reg_replace","","",2],[11,"next","","",3],[11,"next","","",4],[11,"pos","","Returns the start and end positions of the Nth capture group.\nReturns `None` if `i` is not a valid capture group or if the capture\ngroup did not match anything.\nThe positions returned are *always* byte indices with respect to the\noriginal string matched.",5],[11,"at","","Returns the matched string for the capture group `i`.  If `i` isn't\na valid capture group or didn't match anything, then `None` is\nreturned.",5],[11,"name","","Returns the matched string for the capture group named `name`.  If\n`name` isn't a valid capture group or didn't match anything, then\n`None` is returned.",5],[11,"iter","","Creates an iterator of all the capture groups in order of appearance\nin the regular expression.",5],[11,"iter_pos","","Creates an iterator of all the capture group positions in order of\nappearance in the regular expression. Positions are byte indices\nin terms of the original string matched.",5],[11,"expand","","Expands all instances of `$name` in `text` to the corresponding capture\ngroup `name`.",5],[11,"len","","Returns the number of captured groups.",5],[11,"is_empty","","Returns if there are no captured groups.",5],[11,"next","","",6],[11,"next","","",7],[11,"next","","",8],[11,"next","","",9],[8,"Replacer","","Replacer describes types that can be used to replace matches in a string."],[10,"reg_replace","","Returns a possibly owned string that is used to replace the match\ncorresponding to the `caps` capture group.",10]],"paths":[[3,"Error"],[4,"Regex"],[3,"NoExpand"],[3,"RegexSplits"],[3,"RegexSplitsN"],[3,"Captures"],[3,"SubCaptures"],[3,"SubCapturesPos"],[3,"FindCaptures"],[3,"FindMatches"],[8,"Replacer"]]};

initSearch(searchIndex);
