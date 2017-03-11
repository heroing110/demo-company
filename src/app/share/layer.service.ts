import {Injectable} from "@angular/core";
/**
 * Created by baihuibo on 2017/3/11.
 */

@Injectable()
export class LayerService {
  private template = $(`
    <div class="layer"> <progress></progress> </div>
  `);

  open() {
    $('body').append(this.template);
  }

  close() {
    this.template.remove();
  }
}
