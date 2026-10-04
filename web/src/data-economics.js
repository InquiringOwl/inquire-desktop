/* ============ Economics (Social Sciences, lime accent) ============
   A standard US college economics program (principles → intermediate theory → econometrics → applied
   fields, the sequence of a BA/BS in Economics; principles ≈ OpenStax *Principles of Economics 3e*),
   with a Personal Finance track that starts at zero: earning, spending, saving, credit, risk and
   investing (≈ the U.S. National Standards for Personal Financial Education, 2021).
   Fields live in DB.fields with subject: "economics". A field's `math` lists the math fields it uses
   (informational, never locks). All fields are planned until a tree is charted; Personal Finance first. */
(function(){
const sub = DB.subjects.find(s => s.id === "economics");
if (sub) Object.assign(sub, { status: "open", note: "18 fields · field map drawn" });

DB.subjectMaps.economics = { name: "Economics", glyph: "¤", accent: "lime", mapLine: "From your first paycheck to economic policy",
  mapSub: "A college economics program plus a personal-finance track: principles of micro and macro, intermediate theory and econometrics, then applied fields. Arrows show the usual prerequisites; each field lists the mathematics it uses.",
  groups: [
    { name: "Personal Finance", ids: ["personal-finance","investing","financial-econ"] },
    { name: "Foundations", ids: ["econ-micro","econ-macro"] },
    { name: "Core Theory", ids: ["econ-int-micro","econ-int-macro","money-banking","econometrics","game-theory"] },
    { name: "Applied Fields", ids: ["behavioral-econ","labor-econ","public-econ","industrial-org","international-econ","development-econ","environmental-econ","econ-history"] }
  ],
  eras: [
    { name: "Foundations", from: 0, to: 1 },
    { name: "Core Theory", from: 2, to: 3 },
    { name: "Applied Fields", from: 4, to: 5 }
  ] };

Object.assign(DB.fields, {
  "personal-finance": { subject: "economics", name: "Personal Finance", icon: "$", level: "College FIN 1xx · financial literacy", col: 0, row: 2, pre: [], math: ["arithmetic"], status: "planned",
    blurb: "Managing your own money: earning and taxes, budgeting and spending, saving, credit and debt, insurance and risk, and the first steps of investing.",
    topics: ["Financial goals and decisions","Income, paychecks and payroll taxes","Federal income tax and filing a return","Budgeting and cash flow","Banking: checking, savings and fees","Saving and emergency funds","The time value of money","Credit scores and credit reports","Credit cards and interest","Student loans","Car loans and leasing","Renting versus buying a home","Mortgages","Insurance: health, auto, renters and life","Retirement accounts: 401(k) and IRA","Investing basics: stocks, bonds and funds","Consumer protection, fraud and identity theft"] },
  "econ-micro": { subject: "economics", name: "Principles of Microeconomics", icon: "D·S", level: "College ECON 1xx · AP Microeconomics", col: 0, row: 5, pre: [], math: ["algebra-1"], status: "planned",
    blurb: "How households and firms make choices and how markets set prices: scarcity, supply and demand, elasticity, costs, market structures and market failure.",
    topics: ["Scarcity, choice and opportunity cost","The production possibilities frontier","Comparative advantage and trade","Demand","Supply","Market equilibrium","Elasticity","Price controls and taxes","Consumer and producer surplus","Consumer choice and utility","Costs of production","Perfect competition","Monopoly","Monopolistic competition and oligopoly","Labor markets","Externalities","Public goods","Information and market failure"] },
  "econ-macro": { subject: "economics", name: "Principles of Macroeconomics", icon: "GDP", level: "College ECON 1xx · AP Macroeconomics", col: 1, row: 5, pre: ["econ-micro"], math: ["algebra-1"], status: "planned",
    blurb: "The economy as a whole: measuring output, unemployment and inflation, long-run growth, money and the Federal Reserve, business cycles, and fiscal and monetary policy.",
    topics: ["Measuring GDP","Economic growth","Unemployment","Inflation and price indexes","The international trade balance","Aggregate demand and aggregate supply","The Keynesian expenditure model","Money and banks","The Federal Reserve and monetary policy","Fiscal policy and the budget","Deficits and the national debt","Exchange rates and capital flows","Macroeconomic policy debates"] },
  "investing": { subject: "economics", name: "Investing & Financial Markets", icon: "↗%", level: "College FIN 2xx · investments for individuals", col: 2, row: 1, pre: ["personal-finance"], math: ["algebra-2"], status: "planned",
    blurb: "How financial markets work and how individuals invest in them: stocks, bonds and funds, return and risk, diversification, retirement planning and the behavioural traps investors fall into.",
    topics: ["What financial markets do","Stocks and how they are valued","Bonds and interest rates","Mutual funds, index funds and ETFs","Return, compounding and inflation","Risk and diversification","Asset allocation and rebalancing","Retirement planning and withdrawal rates","Taxes on investments","Fees and their long-run cost","Market efficiency and indexing","Behavioural mistakes investors make"] },
  "econ-int-micro": { subject: "economics", name: "Intermediate Microeconomics", icon: "∂U", level: "College ECON 3xx · calculus-based price theory", col: 2, row: 4, pre: ["econ-micro"], math: ["calculus-1"], status: "planned",
    blurb: "Price theory with calculus: utility maximisation and demand, production and cost functions, competitive and strategic markets, general equilibrium and welfare.",
    topics: ["Preferences and utility","Budget constraints and optimal choice","Demand, income and substitution effects","Choice under uncertainty","Production functions","Cost minimisation and cost curves","Profit maximisation and supply","Competitive equilibrium","Monopoly and price discrimination","Oligopoly models","General equilibrium and efficiency","Welfare economics","Asymmetric information"] },
  "money-banking": { subject: "economics", name: "Money & Banking", icon: "M2", level: "College ECON 3xx", col: 2, row: 6, pre: ["econ-macro"], math: ["algebra-2"], status: "planned",
    blurb: "The financial system and the central bank: what money is, how banks create it, interest rates and the yield curve, financial crises and how the Federal Reserve conducts policy.",
    topics: ["What money is","The financial system","Interest rates and bond prices","The term structure of interest rates","How banks work","The money supply process","Financial regulation","Financial crises","The Federal Reserve System","Tools of monetary policy","Monetary policy strategy","International finance and exchange rates"] },
  "econometrics": { subject: "economics", name: "Econometrics", icon: "β̂", level: "College ECON 3xx", col: 2, row: 8, pre: ["econ-micro"], math: ["statistics","linear-algebra"], status: "planned",
    blurb: "Measuring economic relationships with data: regression, hypothesis tests, causal inference with experiments and natural experiments, panel data and time series.",
    topics: ["Data and economic questions","Review of probability and statistics","Simple linear regression","Multiple regression","Hypothesis tests and confidence intervals","Functional form and dummy variables","Heteroskedasticity","Omitted variables and causality","Instrumental variables","Randomised experiments","Differences-in-differences","Panel data","Time series and forecasting"] },
  "game-theory": { subject: "economics", name: "Game Theory", icon: "⊞", level: "College ECON 3xx", col: 3, row: 3, pre: ["econ-int-micro"], math: ["probability"], status: "planned",
    blurb: "Strategic decisions when your best move depends on others' moves: Nash equilibrium, sequential games, repeated games, incomplete information, auctions and bargaining.",
    topics: ["Strategic-form games","Dominant strategies","Nash equilibrium","Mixed strategies","Sequential games and backward induction","Subgame perfection","Repeated games and cooperation","Games of incomplete information","Signalling","Auctions","Bargaining","Mechanism design"] },
  "econ-int-macro": { subject: "economics", name: "Intermediate Macroeconomics", icon: "Y=C+I", level: "College ECON 3xx", col: 3, row: 6, pre: ["econ-macro","econ-int-micro"], math: ["calculus-1"], status: "planned",
    blurb: "Macroeconomic models: long-run growth (Solow), consumption and investment, the labor market, business cycles in the IS–LM and AD–AS frameworks, and modern policy debates.",
    topics: ["National accounts","The Solow growth model","Endogenous growth","Consumption and saving","Investment","Unemployment and the labor market","Money and inflation in the long run","The IS–LM model","Aggregate demand and aggregate supply","The Phillips curve and expectations","Open-economy macroeconomics","Stabilisation policy","Government debt"] },
  "financial-econ": { subject: "economics", name: "Financial Economics", icon: "CAPM", level: "College ECON/FIN 4xx", col: 3, row: 1, pre: ["investing","econ-int-micro"], math: ["calculus-1","statistics"], status: "planned",
    blurb: "The theory behind asset prices: present value, portfolio choice, the capital asset pricing model, efficient markets, derivatives and corporate finance.",
    topics: ["Present value and discounting","Bond pricing and duration","Stock valuation","Risk, return and utility","Portfolio theory","The capital asset pricing model","Factor models","Efficient markets","Behavioural finance","Options and futures","Corporate finance and capital structure"] },
  "behavioral-econ": { subject: "economics", name: "Behavioral Economics", icon: "ψ", level: "College ECON 4xx", col: 4, row: 2, pre: ["econ-int-micro"], status: "planned",
    blurb: "How real people depart from the textbook model: biases and heuristics, prospect theory, present bias, social preferences, and nudges in policy.",
    topics: ["The rational-choice benchmark","Heuristics and biases","Prospect theory and loss aversion","Mental accounting","Present bias and self-control","Social preferences and fairness","Experiments in economics","Nudges and choice architecture","Behavioural public policy"] },
  "labor-econ": { subject: "economics", name: "Labor Economics", icon: "W", level: "College ECON 4xx", col: 4, row: 8, pre: ["econ-int-micro","econometrics"], status: "planned",
    blurb: "How labor markets work: labor supply and demand, human capital, wage differences, discrimination, unions, minimum wages and unemployment.",
    topics: ["Labor supply","Labor demand","Labor market equilibrium","Human capital and education","Compensating wage differentials","Discrimination","Unions and bargaining","The minimum wage","Migration","Unemployment and job search","Inequality"] },
  "public-econ": { subject: "economics", name: "Public Economics", icon: "τ", level: "College ECON 4xx · public finance", col: 4, row: 4, pre: ["econ-int-micro"], status: "planned",
    blurb: "What governments do and how they pay for it: public goods and externalities, taxation and its burden, social insurance, and cost–benefit analysis.",
    topics: ["Why governments intervene","Public goods","Externalities and corrective taxes","Political economy and voting","Cost–benefit analysis","Social insurance","Health care economics","Tax incidence","Tax efficiency and deadweight loss","Optimal taxation","The income tax and its design"] },
  "industrial-org": { subject: "economics", name: "Industrial Organization", icon: "HHI", level: "College ECON 4xx", col: 4, row: 3, pre: ["game-theory"], status: "planned",
    blurb: "How firms compete and how markets are structured: market power, oligopoly, entry, pricing strategies, mergers, platforms and antitrust policy.",
    topics: ["Market structure and concentration","Market power","Oligopoly: Cournot and Bertrand","Product differentiation","Entry and entry deterrence","Price discrimination and bundling","Vertical relationships","Mergers","Platforms and network effects","Antitrust and regulation"] },
  "international-econ": { subject: "economics", name: "International Economics", icon: "⇄", level: "College ECON 4xx", col: 4, row: 6, pre: ["econ-int-macro"], status: "planned",
    blurb: "Trade and money across borders: comparative advantage and trade models, tariffs and trade policy, the balance of payments, exchange rates and international crises.",
    topics: ["Comparative advantage: the Ricardian model","Factor endowments and trade","Trade and economies of scale","Tariffs and quotas","Trade agreements and the WTO","Globalisation and inequality","The balance of payments","Exchange rate determination","Fixed and floating exchange rates","Currency and debt crises"] },
  "development-econ": { subject: "economics", name: "Development Economics", icon: "↑", level: "College ECON 4xx", col: 5, row: 7, pre: ["econ-int-macro"], status: "planned",
    blurb: "Why some countries are rich and others poor: growth and institutions, poverty measurement, health and education, microfinance and field experiments.",
    topics: ["Measuring development and poverty","Growth and convergence","Institutions","Geography and history","Health and nutrition","Education","Credit and microfinance","Agriculture and land","Aid and its effects","Field experiments"] },
  "environmental-econ": { subject: "economics", name: "Environmental Economics", icon: "CO₂", level: "College ECON 4xx", col: 5, row: 4, pre: ["public-econ"], status: "planned",
    blurb: "Economics of the natural world: pollution as an externality, carbon taxes and cap-and-trade, valuing the environment, and the economics of climate change.",
    topics: ["The environment as an externality","Efficient pollution","Taxes versus cap-and-trade","Valuing the environment","Discounting the future","Common-pool resources","Energy markets","The economics of climate change","International environmental agreements"] },
  "econ-history": { subject: "economics", name: "Economic History & Thought", icon: "§", level: "College ECON 4xx", col: 5, row: 9, pre: ["econ-int-macro","econ-int-micro"], status: "planned",
    blurb: "How economies and economic ideas developed: from Adam Smith and the Industrial Revolution through Marx, Keynes and the Great Depression to modern schools of thought.",
    topics: ["Mercantilism and the physiocrats","Adam Smith and the classical school","The Industrial Revolution","Ricardo, Malthus and Mill","Marx","The marginalist revolution","The Great Depression","Keynes and the Keynesian revolution","Monetarism and rational expectations","The postwar economy","Modern schools of thought"] }
});
})();
