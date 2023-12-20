import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function HomeBody() {
  return (
    <main>
      <section>
        <div className="container">
          <div className="mt30 mb30">
            <Card title="Página inicial" />
          </div>

          <div className="dflex">
            <Button text="Ver Promoção" />
          </div>
        </div>
      </section>
    </main>
  );
}
