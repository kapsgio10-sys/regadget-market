import { Search, Smartphone, Laptop, Tablet, Watch, Gamepad2, ShieldCheck, PlusCircle } from "lucide-react";

const products = [
  {
    title: "iPhone 13 128GB",
    price: "329€",
    condition: "Πολύ καλή",
    location: "Θεσσαλονίκη",
    image: "https://images.unsplash.com/photo-1632633173522-47456de71a4d?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Samsung Galaxy S22",
    price: "289€",
    condition: "Καλή",
    location: "Αθήνα",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "MacBook Air M1",
    price: "599€",
    condition: "Άριστη",
    location: "Πάτρα",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "iPad Pro 11”",
    price: "449€",
    condition: "Πολύ καλή",
    location: "Λάρισα",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "PlayStation 5",
    price: "379€",
    condition: "Καλή",
    location: "Ηράκλειο",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Apple Watch Series 8",
    price: "219€",
    condition: "Άριστη",
    location: "Βόλος",
    image: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=900&q=80"
  }
];

const categories = [
  { name: "Κινητά", icon: Smartphone },
  { name: "Laptop", icon: Laptop },
  { name: "Tablet", icon: Tablet },
  { name: "Smartwatch", icon: Watch },
  { name: "Κονσόλες", icon: Gamepad2 }
];

export default function App() {
  return (
    <main>
      <header className="nav">
        <div className="logo">
          <span>Re</span>Gadget Market
        </div>
        <div className="nav-actions">
          <button className="ghost">Σύνδεση</button>
          <button className="primary">Ανέβασε αγγελία</button>
        </div>
      </header>

      <section className="hero">
        <div>
          <p className="badge">Marketplace μεταχειρισμένων gadgets</p>
          <h1>Βρες ή πούλησε κινητά, tablet, laptop και κονσόλες με ασφάλεια.</h1>
          <p className="subtitle">
            Καθαρή πλατφόρμα για μεταχειρισμένες συσκευές, με αγγελίες, τιμές, φωτογραφίες και έλεγχο εμπιστοσύνης.
          </p>

          <div className="search-box">
            <Search size={20} />
            <input placeholder="Ψάξε π.χ. iPhone κάτω από 350€" />
            <button>Αναζήτηση</button>
          </div>
        </div>

        <div className="hero-card">
          <ShieldCheck size={42} />
          <h3>Έλεγχος αγγελιών</h3>
          <p>Στόχος: λιγότερα scam, καθαρές περιγραφές και ασφαλέστερη αγορά. Ναι, το internet χρειάζεται επίβλεψη σαν παιδική χαρά.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Κατηγορίες</h2>
          <p>Ξεκίνα από τα βασικά. Όχι 84 κατηγορίες από την πρώτη μέρα, δεν χτίζουμε υπουργείο.</p>
        </div>

        <div className="categories">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button className="category" key={cat.name}>
                <Icon size={24} />
                {cat.name}
              </button>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Δημοφιλείς αγγελίες</h2>
          <button className="add">
            <PlusCircle size={18} />
            Νέα αγγελία
          </button>
        </div>

        <div className="grid">
          {products.map((item) => (
            <article className="product" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div className="product-body">
                <div className="price">{item.price}</div>
                <h3>{item.title}</h3>
                <p>{item.condition} κατάσταση • {item.location}</p>
                <button>Δες αγγελία</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ai-box">
        <div>
          <p className="badge">Επόμενο βήμα AI</p>
          <h2>Αυτόματη περιγραφή αγγελίας</h2>
          <p>
            Στο επόμενο κομμάτι θα βάλουμε κουμπί που γράφει μόνο του τίτλο και περιγραφή από λίγες λέξεις.
          </p>
        </div>
      </section>
    </main>
  );
}
