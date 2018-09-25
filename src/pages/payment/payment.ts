import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PedidoDTO } from '../../models/pedido.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  pedido: PedidoDTO;

  parcelas: number[] = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];

  formGroup: FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public formBulder: FormBuilder) {

     this.pedido = this.navParams.get('pedido');

     this.formGroup = this.formBulder.group({
       numeroDeParcelas: [1, Validators.required],
       "@type": ["pagamentoComBoleto", Validators.required]
     });
  }

  ionViewDidLoad() {
    
  }

  nextPage(){
    this.pedido.pagamento = this.formGroup.value;
    this.navCtrl.push("OrderConfirmationPage", {pedido: this.pedido});
  }

}
