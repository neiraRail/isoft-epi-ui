import ApiService from "@/services/api.service";
const url = "paciente";
export const service = {
    getAll() {
        return ApiService.get(url+"/buscar", { id: "" });
    },
    get(id) {
        return ApiService.get(url, { id: id });
    },
    create(params) {
        return ApiService.post(url, { params: params });
    },
    update(id, params) {
        return ApiService.update(url+"/editar"+"/"+id, { id: id, params: params });
    },
    destroy(id) {
        return ApiService.delete(url+"/eliminar"+"/"+id, { id: id });
    },
};
export default service;
