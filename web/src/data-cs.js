/* ============ Computer Science ============
   The standard college CS major (ACM/IEEE CS2023 curriculum guidelines): CS1–CS2 and systems, the core
   courses, then upper-division electives. First field: Programming Fundamentals (CS1, Python; reference
   OpenStax *Introduction to Python Programming*). Pages are taught like math: definition, worked trace,
   practice. Fields list the mathematics they need (`math`, informational, never locks).
   Spec: web/TREE-SPEC-CS.md · lab kit: web/src/kit-cs.js */
(function(){
const sub = DB.subjects.find(s => s.id === "computer-science");
if (sub) Object.assign(sub, { status: "open", note: "18 fields · Programming Fundamentals charted" });

DB.subjectMaps["computer-science"] = { name: "Computer Science", glyph: "<span class=\"gx\">&lt;/&gt;</span>", mapLine: "From your first program to machine learning",
  mapSub: "The standard college computer science major: programming and data structures, the systems and theory core, then upper-division electives. Arrows show the usual prerequisites; each field lists the mathematics it needs.",
  groups: [
    { name: "Foundations", ids: ["programming-1","data-structures","computer-systems"] },
    { name: "Core", ids: ["algorithms","prog-languages","software-eng","architecture","theory-computation","databases","operating-systems","networks"] },
    { name: "Upper Division", ids: ["compilers","distributed","security","ai","machine-learning","graphics","hci"] }
  ],
  eras: [
    { name: "Foundations", from: 0, to: 1 },
    { name: "Core", from: 2, to: 3 },
    { name: "Upper Division", from: 4, to: 5 }
  ] };

const F = (id, o) => DB.fields[id] = Object.assign({ subject: "computer-science", status: "planned" }, o);

F("programming-1", { name: "Programming Fundamentals", icon: ">_", level: "College CS 1xx · CS1 (Python)", col: 0, row: 4, pre: [], math: ["algebra-1"],
  blurb: "Writing, tracing and testing programs: values and types, control flow, functions and recursion, strings, lists and dictionaries, files, and a first look at objects and efficiency.",
  topics: [], status: "charted" });
F("data-structures", { name: "Data Structures", icon: "[ ]", level: "College CS 1xx · CS2", col: 1, row: 3, pre: ["programming-1"], math: ["discrete"],
  blurb: "Organising data so programs stay fast: abstract data types, linked lists, stacks and queues, trees, heaps, hash tables and graphs, with Big-O analysis of each.",
  topics: ["Abstract data types","Big-O, Big-Θ and Big-Ω","Arrays and dynamic arrays","Linked lists","Stacks and queues","Recursion and divide and conquer","Binary search trees","Balanced trees","Heaps and priority queues","Hash tables","Graphs and their representations","Graph traversal: BFS and DFS","Sorting: merge sort and quicksort"] });
F("computer-systems", { name: "Computer Systems", icon: "0x", level: "College CS 2xx · systems programming in C", col: 1, row: 6, pre: ["programming-1"], math: ["arithmetic"],
  blurb: "How a program really runs: C, pointers and memory, integer and floating-point representation, machine code, the stack, caches, linking and processes.",
  topics: ["C programs and compilation","Pointers and arrays","Dynamic memory","Integer representation","Floating point","Machine-level code","The stack and procedure calls","The memory hierarchy and caches","Linking","Processes and signals"] });
F("algorithms", { name: "Algorithms", icon: "O(n)", level: "College CS 3xx · design and analysis of algorithms", col: 2, row: 1, pre: ["data-structures"], math: ["discrete","probability"],
  blurb: "Designing algorithms and proving them correct and efficient: divide and conquer, greedy methods, dynamic programming, graph algorithms, and NP-completeness.",
  topics: ["Asymptotic analysis and recurrences","Divide and conquer","Randomised algorithms","Greedy algorithms","Dynamic programming","Shortest paths","Minimum spanning trees","Network flow","NP-completeness and reductions","Approximation algorithms"] });
F("prog-languages", { name: "Programming Languages", icon: "λx", level: "College CS 3xx · principles of programming languages", col: 2, row: 3, pre: ["data-structures"], math: ["discrete"],
  blurb: "How languages work and why they differ: syntax and semantics, functional programming, types and type checking, scope, closures, and interpreters.",
  topics: ["Syntax and grammars","Semantics","Functional programming","Higher-order functions and closures","Types and type checking","Polymorphism","Memory management and garbage collection","Writing an interpreter"] });
F("software-eng", { name: "Software Engineering", icon: "{ }", level: "College CS 3xx", col: 2, row: 5, pre: ["data-structures"],
  blurb: "Building software with other people: requirements, design and architecture, version control, testing, code review, and maintaining large systems.",
  topics: ["Requirements and user stories","Software design and modularity","Design patterns","Version control","Testing strategies","Code review and refactoring","Software process: agile and iterative","Maintenance and technical debt"] });
F("architecture", { name: "Computer Architecture", icon: "ALU", level: "College CS/EE 3xx", col: 2, row: 7, pre: ["computer-systems"], math: ["discrete"],
  blurb: "The machine beneath the code: digital logic, instruction sets, datapaths, pipelining, memory hierarchies and parallel hardware.",
  topics: ["Boolean logic and gates","Combinational and sequential circuits","Instruction set architecture","The single-cycle datapath","Pipelining and hazards","Caches and virtual memory","Performance","Multicore and parallel hardware"] });
F("theory-computation", { name: "Theory of Computation", icon: "DFA", level: "College CS 3xx", col: 3, row: 0, pre: ["algorithms"], math: ["discrete"],
  blurb: "What can be computed at all: finite automata and regular languages, context-free grammars, Turing machines, decidability and complexity classes.",
  topics: ["Finite automata","Regular expressions and regular languages","The pumping lemma","Context-free grammars and pushdown automata","Turing machines","Decidability and the halting problem","Reductions","P, NP and NP-completeness"] });
F("databases", { name: "Databases", icon: "SQL", level: "College CS 3xx", col: 3, row: 2, pre: ["data-structures"], math: ["discrete"],
  blurb: "Storing and querying data reliably: the relational model, SQL, design and normalisation, indexing, query processing and transactions.",
  topics: ["The relational model","Relational algebra","SQL queries","Entity–relationship design","Normalisation","Indexing and B-trees","Query processing","Transactions and concurrency control"] });
F("operating-systems", { name: "Operating Systems", icon: "PID", level: "College CS 3xx", col: 3, row: 6, pre: ["computer-systems","data-structures"],
  blurb: "The software that runs the machine: processes and threads, scheduling, synchronisation, virtual memory, file systems and protection.",
  topics: ["Processes and threads","CPU scheduling","Synchronisation: locks and semaphores","Deadlock","Virtual memory and paging","File systems","I/O and devices","Protection and isolation"] });
F("networks", { name: "Computer Networks", icon: "TCP", level: "College CS 3xx", col: 3, row: 8, pre: ["computer-systems"], math: ["probability"],
  blurb: "How computers talk: the layered Internet architecture, application protocols, TCP and congestion control, IP routing, and link layers.",
  topics: ["Layers and the Internet architecture","The application layer: HTTP and DNS","Sockets","Transport: UDP and TCP","Congestion control","IP addressing and routing","The link layer and Ethernet","Wireless networks"] });
F("compilers", { name: "Compilers", icon: "AST", level: "College CS 4xx", col: 4, row: 3, pre: ["prog-languages","theory-computation","architecture"],
  blurb: "Turning source code into machine code: lexing, parsing, semantic analysis, intermediate representations, optimisation and code generation.",
  topics: ["Lexical analysis","Parsing","Abstract syntax trees","Semantic analysis and type checking","Intermediate representations","Optimisation","Register allocation","Code generation"] });
F("distributed", { name: "Distributed Systems", icon: "⇄", level: "College CS 4xx", col: 4, row: 5, pre: ["operating-systems","networks"],
  blurb: "Many machines acting as one: time and ordering, replication and consistency, consensus, fault tolerance, and large-scale services.",
  topics: ["Remote procedure calls","Time, clocks and ordering","Replication","Consistency models","Consensus: Paxos and Raft","Fault tolerance","Distributed storage","Large-scale services"] });
F("security", { name: "Computer Security", icon: "RSA", level: "College CS 4xx", col: 4, row: 7, pre: ["operating-systems","networks"], math: ["number-theory"],
  blurb: "Keeping systems safe: threat models, memory-safety bugs, access control, cryptography, network and web security.",
  topics: ["Threat models and security principles","Memory-safety vulnerabilities","Access control","Symmetric cryptography","Public-key cryptography","Authentication","Network security","Web security"] });
F("ai", { name: "Artificial Intelligence", icon: "A*", level: "College CS 4xx", col: 4, row: 1, pre: ["algorithms"], math: ["probability","statistics"],
  blurb: "Programs that act intelligently: search, game playing, constraint satisfaction, logic, probabilistic reasoning, planning and an introduction to learning.",
  topics: ["Intelligent agents","Uninformed and informed search","Adversarial search","Constraint satisfaction","Logic and inference","Probabilistic reasoning","Markov decision processes","Introduction to learning"] });
F("machine-learning", { name: "Machine Learning", icon: "∇", level: "College CS 4xx", col: 5, row: 1, pre: ["ai"], math: ["linear-algebra","statistics","calculus-3"],
  blurb: "Learning patterns from data: regression and classification, model evaluation, kernels and trees, neural networks, and unsupervised learning.",
  topics: ["Linear regression","Logistic regression and classification","Overfitting and regularisation","Model evaluation","Decision trees and ensembles","Support vector machines","Neural networks and backpropagation","Clustering and dimensionality reduction"] });
F("graphics", { name: "Computer Graphics", icon: "△", level: "College CS 4xx", col: 5, row: 4, pre: ["algorithms"], math: ["linear-algebra"],
  blurb: "Making images with code: rasterisation, transformations and cameras, shading and lighting, textures, and ray tracing.",
  topics: ["Raster images and colour","2-D and 3-D transformations","Cameras and projection","Rasterisation","Shading and lighting","Texture mapping","Ray tracing","Animation"] });
F("hci", { name: "Human–Computer Interaction", icon: "☞", level: "College CS 4xx", col: 5, row: 6, pre: ["software-eng"], math: ["statistics"],
  blurb: "Designing software people can use: user research, prototyping, usability principles, accessibility, and evaluation with real users.",
  topics: ["User-centred design","User research","Prototyping","Usability principles","Accessibility","Visual and interaction design","Evaluation and usability testing","Experiments and statistics"] });

/* Programming Fundamentals (all 24 nodes written).
   Spec: web/TREE-SPEC-CS.md (lab modes and programs per node). */
DB.trees["programming-1"] = {
  eras: [
    { name: "Basics", from: 0, to: 2 },
    { name: "Control Flow", from: 3, to: 5 },
    { name: "Functions", from: 6, to: 8 },
    { name: "Data", from: 9, to: 10 },
    { name: "Objects & Design", from: 11, to: 12 }
  ],
  nodes: [
    { id: "cs-programs", col: 0, row: 4, icon: ">_", chips: ["print","run","error"], pre: [] },
    { id: "cs-binary", col: 1, row: 2, icon: "01", chips: ["bit","0xFF","UTF-8"], pre: ["cs-programs"], math: ["place-value","exponents"] },
    { id: "cs-types", col: 1, row: 5, icon: "int", chips: ["int","float","str"], pre: ["cs-programs"], math: ["order-ops","decimals","integers"] },
    { id: "cs-variables", col: 2, row: 5, icon: "x =", chips: ["name","bind","swap"], pre: ["cs-types"], math: ["pa-variables","pa-evaluate"] },
    { id: "cs-io", col: 2, row: 7, icon: "f\"\"", chips: ["input","int()","f-string"], pre: ["cs-types"], math: ["rounding"] },
    { id: "cs-booleans", col: 3, row: 3, icon: "T/F", chips: ["==","and","or"], pre: ["cs-variables","cs-binary"], math: ["pa-inequalities"] },
    { id: "cs-conditionals", col: 4, row: 4, icon: "if", chips: ["if","elif","else"], pre: ["cs-booleans","cs-io"], math: ["a1-piecewise"] },
    { id: "cs-while", col: 5, row: 2, icon: "↻", chips: ["while","n // 10"], pre: ["cs-conditionals"] },
    { id: "cs-for", col: 5, row: 5, icon: "for", chips: ["range","total +="], pre: ["cs-conditionals"], math: ["a1-sequences"] },
    { id: "cs-nested-loops", col: 6, row: 7, icon: "i·j", chips: ["outer","inner"], pre: ["cs-for"], math: ["multiplication"] },
    { id: "cs-functions", col: 6, row: 3, icon: "def", chips: ["def","return","None"], pre: ["cs-while","cs-for"], math: ["pa-functions","a1-functions"] },
    { id: "cs-scope", col: 7, row: 2, icon: "▤", chips: ["local","global","frame"], pre: ["cs-functions"] },
    { id: "cs-recursion", col: 8, row: 2, icon: "f(n−1)", chips: ["base case","n!"], pre: ["cs-scope"], math: ["a1-sequences"] },
    { id: "cs-testing", col: 7, row: 5, icon: "✓", chips: ["assert","trace"], pre: ["cs-functions"] },
    { id: "cs-strings", col: 8, row: 6, icon: "\"ab\"", chips: ["s[i]","s[1:4]"], pre: ["cs-for","cs-functions"] },
    { id: "cs-lists", col: 9, row: 5, icon: "[ ]", chips: ["append","alias","copy"], pre: ["cs-strings"] },
    { id: "cs-search-sort", col: 10, row: 3, icon: "⇅", chips: ["linear","selection","insertion"], pre: ["cs-lists","cs-nested-loops"] },
    { id: "cs-dicts-sets", col: 10, row: 6, icon: "{k:v}", chips: ["dict","set","tuple"], pre: ["cs-lists"] },
    { id: "cs-2d-data", col: 10, row: 8, icon: "▦", chips: ["grid[r][c]"], pre: ["cs-lists","cs-nested-loops"], math: ["pa-coordinate"] },
    { id: "cs-files", col: 9, row: 8, icon: "try", chips: ["open","except"], pre: ["cs-strings","cs-testing"] },
    { id: "cs-classes", col: 11, row: 5, icon: "class", chips: ["__init__","self"], pre: ["cs-dicts-sets","cs-functions"] },
    { id: "cs-efficiency", col: 11, row: 2, icon: "O(n)", chips: ["n","n²"], pre: ["cs-search-sort","cs-recursion"], math: ["a1-exp-functions"] },
    { id: "cs-objects", col: 12, row: 5, icon: "obj.m()", chips: ["method","inherit"], pre: ["cs-classes"] },
    { id: "cs-modules", col: 12, row: 8, icon: "import", chips: ["math","random"], pre: ["cs-files","cs-2d-data"] }
  ]
};
})();
