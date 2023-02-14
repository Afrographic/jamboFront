export class HelperFunction {

    static numFormatter(num: any) {
        if (num > 999 && num < 1000000) {
            return (num / 1000).toFixed(1) + 'K';
        } else if (num > 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num < 900) {
            return num;
        }
    }

    static Ucase(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }


    static isInViewport(el: any) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    static sleep(ms: any) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    static getDate() {
        let currentdate = new Date();
        let datetime = currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + " "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":"
            + currentdate.getSeconds();

        return datetime;
    }

    static uid() {
        let a = new Uint32Array(3);
        window.crypto.getRandomValues(a);
        return (performance.now().toString(36) + Array.from(a).map(A => A.toString(36)).join("")).replace(/\./g, "").substring(0, 9);
    }

    static URLParser(url: string) {
        // http://localhost:4200/#/editName?id=16&color=orange&size=M
        // url = " http://localhost:4200/#/editName?id=16&color=orange&size=M";
        let paramString = url.split("?")[1];
        return `?${paramString}`;
    }

    static secondsTOHHMMSS(sec: number) {
        let sec_num = parseInt(`${sec}`, 10)
        let hours = Math.floor(sec_num / 3600)
        let minutes = Math.floor(sec_num / 60) % 60
        let seconds = sec_num % 60

        return [hours, minutes, seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v, i) => v !== "00" || i > 0)
            .join(":")
    }

    static getFormDataFromObject(object: any) {
        let form_data = new FormData();
        for (const item in object) {
            form_data.append(item, object[item]);
        }
        return form_data;
    }

    static async send_request(req:any) {
        try {
            HelperFunction.show_loader();
            let res: any = await fetch(req);
            HelperFunction.hide_loader();
            let data: any;
            HelperFunction.show_loader();
            try {
                data = await res.text();
                data = this.string_to_json(data);
            } catch (e) {
                data = {};
            }
            HelperFunction.hide_loader();

            return {
                response: res,
                data: data
            };
        } catch (e) {
            return {
                response: {
                    status: 404,
                    statusText: "Serveur indisponible"
                },
                data: {}
            };
        }
    }

    static string_to_json(data_string: string) {
        let data_json = {};
        try {
            data_json = JSON.parse(data_string);
        } catch (e) {
            data_json = { msg: data_string }
        }
        return data_json;
    }

    static getExtension(file_name: string) {
        let file_name_array = file_name.split(".");
        return file_name_array[file_name_array.length - 1];
    }

    static isImage(file: File) {
        let extension = this.getExtension(file.name);
        extension = extension.toLowerCase();
        return extension == 'jpeg' || extension == 'jpg' || extension == 'png' || extension == 'svg' || extension == 'gif' || extension == 'webp'
    }

    static fileExceed10M(file: File) {
        return file.size > 10000000;
    }

    static file_over_1Go(file: File) {
        return file.size > 1000000000;
    }

    static remove_all_spaces(str:any) {
        return str.trim().replaceAll(/\s+/g, "");
    }

    static remove_extra_white_space(str: any) {
        return str.trim().replaceAll(/\s+/g, " ");
    }

    static remove_all_white_space(str: any) {
        return str.trim().replaceAll(/\s+/g, "");
    }

    static format_data(date: string): string {
        date = date.split('T')[0];
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let date_array = date.split("-");
        let day = date_array[2];
        let month = parseInt(date_array[1]);
        let year = date_array[0]

        return `${day} ${months[month - 1]} ${year}`;
    }

    static copy(content: string) {
        let textarea = document.createElement("textarea");
        textarea.value = content;
        textarea.className = 'ghost';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        textarea.setSelectionRange(0, 99999);
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }

    static async show_positive_message(message: string) {
        let info: any = document.querySelector(".info");
        info.firstElementChild.src = "assets/images/check.svg";
        info.lastElementChild.innerHTML = message;
        info.classList.add("info_visible");
        info.classList.remove("negative");
        info.classList.add("positive");
        await this.sleep(2000);
        info.classList.remove("info_visible");
    }

    static async show_negative_message(message: string) {
        let info: any = document.querySelector(".info");
        info.firstElementChild.src = "assets/images/error.svg";
        info.lastElementChild.innerHTML = message;
        info.classList.add("info_visible");
        info.classList.remove("positive");
        info.classList.add("negative");
        await this.sleep(2000);
        info.classList.remove("info_visible");
    }

    static  generate_round_link(round_id: number) {
        let url = document.baseURI;
        return `${url}round?uid=${round_id}`;
    }

    static show_loader() {
        let loader: any = document.querySelector("#ankh_api_loader");
        loader.classList.add("active");
    }

    static hide_loader() {
        let loader: any = document.querySelector("#ankh_api_loader");
        loader.classList.remove("active");
    }

    static get_elapsed_time(date_: any) {
        let date = new Date(date_);
        let current_date = new Date();
        let diff = current_date.getTime() - date.getTime();
        let diff_days_raw = diff / (1000 * 60 * 60 * 24);


        let diff_days = Math.floor(diff_days_raw);
        let diff_hours = Math.floor(diff_days_raw * 24);
        let diff_minutes = Math.floor(diff_days_raw * 24 * 60)
        let diff_seconds = Math.floor(diff_days_raw * 24 * 60 * 60)

        let res;

        if (diff_days == 0) {
            if (diff_hours == 0) {
                if (diff_minutes == 0) {
                    res = `${diff_seconds} s`;
                } else {
                    res = `${diff_minutes} minutes`;
                }
            } else {
                res = `${diff_hours} heures`;
            }
        } else {
            if (diff_days > 30) {
                if (diff_days > 365) {
                    res = `${Math.floor(diff_days / 365)} an`
                } else {
                    res = `${Math.floor(diff_days / 30)} mois`
                }
            } else {
                res = `${diff_days} Jours`;
            }
        }

        return res;
    }
}
